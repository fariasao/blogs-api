require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const errorHandler = require('./middlewares/errorHandler');
const { 
  userRouter, 
  loginRouter, 
  categoryRouter, 
  postRouter, 
} = require('./routes');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', userRouter);

app.use(loginRouter);

app.use(categoryRouter);

app.use(postRouter);

app.use(errorHandler);
