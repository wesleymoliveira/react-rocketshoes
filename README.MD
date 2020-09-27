# RocketShoes!

Hi! It's your first guide in **Rocket Shoes** .
This app was developed  in Rocketseat BootCamp.


With this project I've practiced:

 1. Code patterns
 2. SPA
 3. Styled Components
 4. Global Styles
 5. HTTP Request
 6. Fake API
 7. REDUX - SAGA
 8. Polished
 9. Components

## Pages

### Product Page
![Main](https://github.com/wesleymoliveira/react-rocketshoes/blob/master/src/assets/main.png)

### Cart
![Cart](https://github.com/wesleymoliveira/react-rocketshoes/blob/master/src/assets/cart.png)

### Product Page Redux State
![Product](https://github.com/wesleymoliveira/react-rocketshoes/blob/master/src/assets/main%20with%20products.png)

### Toast
![Toast](https://github.com/wesleymoliveira/react-rocketshoes/blob/master/src/assets/toast.png)




## Libs

⚛ React `yarn create react-app`

Redux `yarn add react-redux`

React Router Dom `yarn add react-router-dom`

Immer `yarn add immer`

Axios `yarn add axios`

History `yarn add history`

Styled - Components   `yarn add styled-components `

React Toastify `yarn add react-toastify`

Perfect Scrollbar `yarn add react-perfect-scrollbar`

...

## How to
You will need `yarn`  installed on your machine.

On this project I have used a fake API. After the lib instalation,you need to create a file named 'server.json' on the project root with the following content:
`{
  "stock": [
    {
      "id": 1,
      "amount": 3
    },
    {
      "id": 2,
      "amount": 5
    },
    {
      "id": 3,
      "amount": 2
    },
    {
      "id": 4,
      "amount": 1
    },
    {
      "id": 5,
      "amount": 5
    },
    {
      "id": 6,
      "amount": 10
    }
  ],
  "products": [
    {
      "id": 1,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    },
    {
      "id": 2,
      "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      "price": 139.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
      "id": 3,
      "title": "Tênis Adidas Duramo Lite 2.0",
      "price": 219.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
      "id": 5,
      "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      "price": 139.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
      "id": 6,
      "title": "Tênis Adidas Duramo Lite 2.0",
      "price": 219.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
      "id": 4,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    }
  ]
}`

Run the following commands inside the project folder:

1.  `git clone https://github.com/wesleymoliveira/react-rocketshoes.git;`

2.  `yarn`

3.  `json-server server.json -p 3333`

4.  `yarn start`

