"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractUserId = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'dea35035ec63c5c13d25af407286138e0d7f8e74ad1b8793d1cf9a0ef8d37122';
const extractUserId = (token) => {
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    return decoded.userId;
};
exports.extractUserId = extractUserId;
