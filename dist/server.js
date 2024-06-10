"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Configs
const port = 8080;
//Packages
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//Modules
const Router_1 = __importDefault(require("./src/Router"));
//Use
app.use(express_1.default.json());
app.use(Router_1.default);
//Listen
app.listen(port, () => console.log(`Connected on port ${port}`));
