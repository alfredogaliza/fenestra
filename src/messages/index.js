/**
 * @module Fenestra/Messages
 */

/**
 * @typedef  {Object} Messages Mensagens do sistema
 * @property {string} defaultTitle Título padrão da janela
 * @property {string} showWindows Mensagem do botão de Visualizar Janelas da Barra de Tarefas
 * @property {string} showDesktop Mensagem do botão de Visualizar Desktop da Barra de Tarefas
 * @property {string} minimizeWindow Mensagem do botão de minimizar a janela
 * @property {string} maximizeWindow Mensagem do botão de maximizar a janela
 * @property {string} resizeWindow Mensagem do botão de redimensionar a janela
 * @property {string} closeWindow Mensagem do botão de fechar janela
 * @property {string} closeDialog Mensagem de confirmação de fechar janela
 */

 /**
  * @constant {module:Fenestra/Messages~Messages} messages Mensagens padrão do sistema
  */
const messages =  {
    defaultTitle: "(No Title)",
    showWindows: "Show Windows",
    showDesktop: "Show Desktop",
    minimizeWindow: "Minimize Window",
    maximizeWindow: "Maximize Window",
    resizeWindow: "Resize Window",    
    closeWindow: "Close Window",
    closeDialog: "Are you sure closing this window: "    
}

export default messages;