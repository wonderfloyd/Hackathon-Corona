(function(doc){
  const appEsmScriptElement = createAppEsmScriptElement(doc);
  console.log('app esm script: ' + appEsmScriptElement.src);
  doc.head.appendChild(appEsmScriptElement);
  logWarnMessage(doc, appEsmScriptElement);
})(document);

function createAppEsmScriptElement(doc) {
  const appEsmScriptElement = doc.createElement('script');
  appEsmScriptElement.src = doc.URL + "app.esm.js";
  appEsmScriptElement.setAttribute('type', 'module');
  appEsmScriptElement.setAttribute('data-stencil-namespace', 'expressStencilStarter');
  return appEsmScriptElement;
}

function logWarnMessage(doc, appEsmScriptElement) {
  let starterScript = doc.scripts[doc.scripts.length - 1];
  const warn = ['[expressStencilStarter] Deprecated script, please remove: ' + starterScript.outerHTML];
  warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:');
  warn.push(appEsmScriptElement.outerHTML);
  console.warn(warn.join('\n'));
}
