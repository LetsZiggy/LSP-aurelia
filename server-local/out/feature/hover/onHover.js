"use strict";
// import { Position, TextDocument } from 'vscode-languageserver';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onHover = void 0;
// import { findSourceWord } from '../../common/documens/find-source-word';
function onHover(
// documentContent: string,
// position: Position,
// filePath: string
) {
    return __awaiter(this, void 0, void 0, function* () {
        return;
        // const document = TextDocument.create(filePath, 'html', 0, documentContent);
        // const doHover = mode.doHover;
        // const offset = document.offsetAt(position);
        // const goToSourceWord = findSourceWord(region, offset);
        // if (doHover) {
        //   try {
        //     const hoverResult = await doHover(
        //       document,
        //       position,
        //       goToSourceWord,
        //       region
        //     );
        //     return hoverResult;
        //   } catch (error) {
        //     console.log('TCL: error', error);
        //     return;
        //   }
        // }
    });
}
exports.onHover = onHover;
//# sourceMappingURL=onHover.js.map