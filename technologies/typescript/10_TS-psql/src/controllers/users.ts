import { RequestHandler, Request, Response, response } from "express";
import { resolve } from "path";
import { pool } from "../config/queries";

class Controller {
  getUsers(req: Request, res: Response) {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({ data: results.rows, count: results.rowCount });
    });
  }

  getUserById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  }

  createUser(req: Request, res: Response) {
    const { name, email } = req.body;

    pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2)",
      [name, email],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).send(`User added with ID: ${results}`);
      }
    );
  }

  updateUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3",
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`User modified with ID: ${id}`);
      }
    );
  }

  deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    });
  }
}

// module.exports = { UserController: new UserController() };

export const UserController = new Controller();
