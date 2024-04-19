"use strict";
// src/types.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoStatus = void 0;
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["NOT_STARTED"] = "not started";
    TodoStatus["IN_PROGRESS"] = "in progress";
    TodoStatus["READY_FOR_REVIEW"] = "ready for review";
    TodoStatus["IN_REVIEW"] = "in review";
    TodoStatus["DONE"] = "done";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
