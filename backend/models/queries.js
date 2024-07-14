import { pool } from "../config/db_connect.js";
import format from "pg-format";

try {
    await pool.query('SELECT NOW()');
    console.log('Database connection successful');
} catch (error) {
    console.error('Database connection error:', error);
}

const getJewelry = async (id) => {
    const { rows } = await pool.query(
        `SELECT * FROM inventario WHERE id = $1`, [id]
    );

    if (rows.length === 0) {
        throw {
            status: 404,
            message: `No se encuentra joya con el id ${id}`,
        };
    }

    return rows[0];
}

const getJewelries = async ({ limits = 6, order_by = 'nombre_ASC', page = 1 }) => {
    const offset = (page - 1) * limits;
    const [campo, direccion] = order_by.split('_');

    const formattedQuery = format(
        `SELECT * FROM inventario ORDER BY %I %s LIMIT %L OFFSET %L`,
        campo,
        direccion,
        limits,
        offset
    );

    const { rows } = await pool.query(formattedQuery);
    const totalJoyas = rows.length;
    const stockTotal = rows.reduce((acc, joya) => acc + joya.stock, 0);
    const result = rows.map((joya) => ({
        name: joya.nombre,
        href: `/joyas/joya/${joya.id}`,
    }));

    return {
        totalJoyas,
        stockTotal,
        result,
    };
};

const getFilteredJewelries = async ({ precio_min, precio_max, categoria, metal }) => {
    let filters = [];
    const values = [];

    const addFilter = (field, compare, value) => {
        values.push(value);
        filters.push(`${field} ${compare} $${filters.length + 1}`);
    };
    
    if (precio_min) {
        addFilter('precio', '>=', precio_min);
    }
    if (precio_max) {
        addFilter('precio', '<=', precio_max);
    }
    if (categoria) {
        addFilter('categoria', 'ILIKE', `%${categoria}%`);
    }
    if (metal) {
        addFilter('metal', 'ILIKE', `%${metal}%`);
    }

    let query = 'SELECT * FROM inventario';
    if (filters.length > 0) {
        query += ` WHERE ${filters.join(' AND ')}`;
    };

    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
        throw {
            status: 404,
            message: 'No se encontraron joyas con los filtros seleccionados',
        };
    };

    return rows;
};

export { getJewelry, getJewelries, getFilteredJewelries };
