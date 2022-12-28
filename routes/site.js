const express = require('express');
const router = express.Router()
const controller = require('../controllers/Controller')

// Lấy toàn bộ các từ có trong từ điển
router.get('/v1/words', controller.getAll);

// Lấy từ theo id
router.get('/v1/words/:idx', controller.getById);

// Lấy các từ theo phân trang và tìm kiếm
router.get('/v1/search', controller.getSearch);

// Lấy danh sách lịch sử tra cứu
router.get('/v1/history', controller.getHistory);

// Lấy danh sách từ yêu thích
router.get('/v1/favorite', controller.getFavorite);

// Cập nhật lịch sử tìm kiếm
router.post('/v1/history/:idx', controller.updateHistory);

// Thêm các từ yêu thích
router.post('/v1/favorite/:idx', controller.updateFavorite);

// Xóa toàn bộ lịch sử tìm kiếm
router.delete('/v1/history', controller.deleteHistory);

// Xóa từ yêu thích l
router.delete('/v1/favorite/:idx', controller.removeFavorite);

// Thêm từ mới vào từ điển
router.post('/v1/words' , controller.addWord);

// Lấy mã id lớn nhất
router.get('/v1/max-code' , controller.getMaxID);

// Xóa từ khỏi từ điển
router.delete('/v1/words/:idx', controller.deleteWord);

// Lấy toàn bộ từ điển Việt Anh
router.get('/v2/words', controller.getAllVN);

// Lấy từ theo ID của từ điển Việt Anh
router.get('/v2/words/:idx', controller.getByIDVN);

// Tìm kiếm từ theo tiếng Việt
router.get('/v2/search/', controller.getSearchVN)

module.exports = router