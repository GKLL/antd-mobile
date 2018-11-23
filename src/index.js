import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import  FastClick  from  'fastclick';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
FastClick.attach(document.body); //解决在移动端延迟问题
export default app._store; // eslint-disable-line