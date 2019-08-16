/**
 * Módulo de Ações para redução do Store do Redux.
 * 
 * @module Fenestra/Actions/Types 
 * @see module:Fenestra/Reducers
 * @see module:Fenestra/Actions
 */

/**
 * @typedef {string} ActionType Tipo de Ação a ser despachada pelo Redux
 */

 /**
 * @typedef {number} TransformType Tipo da transformação a ser aplicada à Janela
 */

 /** @constant {module:Fenestra/Actions/Types~TransformType} TRANSFORM_MOVE Transformação do tipo 'Mover' */
export const TRANSFORM_MOVE = 1;

/** @constant {module:Fenestra/Actions/Types~TransformType} TRANSFORM_RESIZE Transformação do tipo 'Redimensionar' */
export const TRANSFORM_RESIZE = 2;

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_OPEN - Abrir Janela */
export const WINDOW_OPEN = "WINDOW_OPEN";

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_CLOSE -  Fechar Janela */
export const WINDOW_CLOSE = "WINDOW_CLOSE";

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_ACTIVATE -  Ativar/Desativar Janela */
export const WINDOW_ACTIVATE = "WINDOW_ACTIVATE";

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_MINIMIZE -  Minimizar/Deminimizar Janela */
export const WINDOW_MINIMIZE = "WINDOW_MINIMIZE";

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_MAXIMIZE -  Maximizar/Demaximizar Janela */
export const WINDOW_MAXIMIZE = "WINDOW_MAXIMIZE";

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_START_TRANSFORM -  Iniciar transformação da  Janela */
export const WINDOW_START_TRANSFORM = "WINDOW_START_TRANSFORM";

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_TRANSFORM -  Transformar Janela */
export const WINDOW_TRANSFORM = "WINDOW_TRANSFORM";

/** @constant {module:Fenestra/Actions/Types~ActionType} WINDOW_END_TRANSFORM -  Encerrar transformação da Janela */
export const WINDOW_END_TRANSFORM = "WINDOW_END_TRANSFORM";

/** @constant {module:Fenestra/Actions/Types~ActionType} SET_LOADING -  Alterar Backdrop de carregamento da Janela */
export const SET_LOADING = "SET_LOADING";

/** @constant {module:Fenestra/Actions/Types~ActionType} SET_DATA -  Iniciar Sessão */
export const SET_DATA = "SET_DATA";

/** @constant {module:Fenestra/Actions/Types~ActionType} SET_FOOTER -  Alterar rodapé da Janela */
export const SET_FOOTER = "SET_FOOTER";