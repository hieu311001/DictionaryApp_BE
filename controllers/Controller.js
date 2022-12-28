require("dotenv").config()
const db = require('../config/database/db');

class Controller{

    // Lấy ra toàn bộ các từ 
    async getAll(req, res){
        try{
            let sql = 'CALL tbl_edict_GetAll()';
    
            let result = await db.query(sql);
            res.json(result);
        } catch(e){
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy thông tin từ theo id
    async getById(req, res){
        try{
            let idx = req.params.idx;
            let sql = `CALL tbl_edict_GetID(${idx})`;

            let result = await db.query(sql);
            res.json(result);
        } catch(e){
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy các từ theo phân trang và tìm kiếm
    async getSearch(req, res) {
        try {
            let keyword = req.query.keyword;  
            if (!keyword) {
                keyword = " ";
            }   

            let sql = `CALL tbl_edict_Search("${keyword}")`;
            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy danh sách lịch sử tra cứu
    async getHistory(req, res) {
        try {
            let sql = 'CALL tbl_edict_GetHistory()';

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy danh sách các từ yêu thích
    async getFavorite(req, res) {
        try {
            let sql = 'CALL tbl_edict_GetFavorite()';

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Cập nhật lịch sử tìm kiếm
    async updateHistory(req, res) {
        try {
            let params = req.params.idx;
            let sql = `CALL tbl_edict_UpdateHistory(${params})`;

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Thêm từ ưa thích
    async updateFavorite(req, res) {
        try {
            let params = req.params.idx;
            let sql = `CALL tbl_edict_UpdateFavorite(${params})`;

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Xóa toàn bộ lịch sử tìm kiếm
    async deleteHistory(req, res) {
        try {
            let sql = 'CALL tbl_edict_DeleteHistory()';
            
            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Xóa từ yêu thích
    async removeFavorite(req, res) {
        try {
            let idx = req.params.idx;
            let sql = `CALL tbl_edict_RemoveFavorite(${idx})`;
            
            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Thêm từ mới vào từ điển
    async addWord(req, res) {
        try {
            let idx = req.body.idx;
            let word = req.body.word;
            let detail = req.body.detail;

            let sql = `CALL tbl_edict_AddWord(${idx}, "${word}", "${detail}")`;

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy id lớn nhất trong danh sách từ
    async getMaxID (req, res) {
        try {
            let sql = `CALL tbl_edict_getMaxID()`;

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Xóa từ khỏi từ điển
    async deleteWord(req, res) {
        try {
            let idx = req.params.idx;
            let sql = `CALL tbl_edict_deleteWord(${idx})`;

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy toàn bộ từ điển Việt - Anh
    async getAllVN(req, res) {
        try {
            let sql = `CALL tbl_edict_vn_en_GetAllVN()`;

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy từ theo ID của từ điển Việt Anh
    async getByIDVN(req, res) {
        try {
            let idx = req.params.idx;
            let sql = `CALL tbl_edict_vn_en_GetID(${idx})`;

            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }

    // Lấy các từ theo từ khóa tiếng Việt
    async getSearchVN(req, res) {
        try {
            let keyword = req.query.keyword;  
            if (!keyword) {
                keyword = " ";
            }   

            let sql = `CALL tbl_edict_vn_en_Search("${keyword}")`;
            let result = await db.query(sql);
            res.json(result);
        } catch (e) {
            console.error(e);
            res.sendStatus(500);
        }
    }
}

module.exports = new Controller