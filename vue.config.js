module.exports = { 
    devServer: { 
      proxy: { 
        '/': { 
          target: 'http://localhost:5000/', 
          ws: true, 
          secure: false ,
          mode: 'no-cors'
        } 
      } 
    } 
  }