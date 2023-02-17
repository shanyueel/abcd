export default function App() {
  return (

    <div className ="main-area">
      <div className = "step-condition">
        <h1>結帳</h1>
        <div className = "container">
          <div className = "step">
            <span className ="step-circle">O</span>
            <h3 className = "step-title">寄送地址</h3>
          </div>
          <div className = "step">
            <span className ="step-circle">O</span>
            <h3 className = "step-title">運送方式</h3>
          </div>
          <div className = "step">
            <span className ="step-circle">O</span>
            <h3 className = "step-title">付款資訊</h3>
          </div>
        </div>
      </div>
      <div className = "form-area">
        <div className = "container">
          <h2 className = "term-title">寄送地址</h2>
          <form id ="form">
            <div className = "form-row">
              <label>稱謂</label>
              <select name="a-type" id="a-type" required>
                <option value="male" selected>先生</option>
                <option value="female">小姐</option>
              </select>
            </div>
            <div className = "form-row">
              <label>姓名</label>
              <input id ="customer-name" type = "text" placeholder = "請輸入姓名" />
            </div>
            <div className = "form-row">
              <label>電話</label>
              <input id ="customer-phone" type = "text" placeholder = "請輸入行動電話" />
            </div>
            <div className = "form-row">
              <label>Email</label>
              <input id ="customer-email" type = "text" placeholder = "請輸入電子郵件" />
            </div>
            <div className = "form-row">
              <label>縣市</label>
              <select name="a-type" id="a-type" required>
                <option value="" disabled selected>請選擇縣市</option>
                <option value="taipei">台北</option>
              </select>
            </div>
            <div className = "form-row">
              <label>地址</label>
              <input id ="customer-name" type = "text" placeholder = "請輸入地址" />
            </div>
          </form>
        </div>
      </div>

      <div className = "progress-control">
        <a href="#" className="">← 上一步</a>
        <button className="btn btn-primary">下一步</button>
      </div>
    </div>

  );
}
