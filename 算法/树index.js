var tree2 = {
    name: "page.js",
    require: [
      {
        name: "A.js",
        require: [
          {
            name: "B.js",
            require: [
              {
                name: "C.js"
              }
            ]
          }
        ]
      },
      {
        name: "D.js",
        require: [
          {
            name: "C.js"
          },
          {
            name: "E.js"
          }
        ]
      }
    ]
  };
  resolve(tree2); //   ["C.js", "B.js", "A.js", "C.js", "E.js", "D.js", "page.js"]
  

function resolve(root) {
      
      function walk() {
          walk()
      }
      walk()
  }