//Const
const express = require('express');
const routes = express.Router();

//Get
routes.get('/', (req, res)=> {
    req.getConnection((err, conn)=> {
        conn.query('Select * From users', (err, rows)=> {
            if(err) return res.send(err)
            res.json(rows)
            res.status(401).send('Not authorized');

        })
    })
})

//Post
routes.post('/', (req, res)=> {
    req.getConnection((err, conn)=> {
        conn.query('INSERT INTO users SET ?', [req.query], (err, rows)=> {
            if(err) return res.send(err)
            res.send('201')

        })
    })
})

//Update
routes.put('/:id', (req, res)=> {
    req.getConnection((err, conn)=> {
        conn.query('UPDATE users set ? WHERE id = ?', [req.query, req.params.id], (err, rows)=> {
            if(err) return res.send(err)
            res.status(201).send()
        })
    })
})

//Destroy
routes.delete('/:id', (req, res)=> {
    req.getConnection((err, conn)=> {
        conn.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, rows)=> {
            if(err) return res.send(err)
            res.send('202')

        })
    })
})

//Export
module.exports = routes