import Image from "../image/header.png";

function Header({ lung }) {
  return (
    <header>
      <div className="right">
        <p>
          <ul>
            {lung ? (
              <>
                <li className="ar">مبدع</li>
                <li className="ar">مبادر</li>
                <li className="ar">فنان</li>
              </>
            ) : (
              <>
                <li>Creative</li>
                <li>proactive</li>
                <li>artist</li>
              </>
            )}
          </ul>
        </p>
        {lung ? (
          <>
            <h1 className="ar">
              الموقع الشخصي والرسمي
              <br />
              لمحمد كالوميان
            </h1>
            <a href="#Me" className="ar">
              <button className="ar">تصفّح</button>
            </a>
          </>
        ) : (
          <>
            <h1>
              Mr. Kalumian's
              <br />
              official personal
              <br />
              website
            </h1>
            <a href="#Me">
              <button>Browse</button>
            </a>
          </>
        )}
      </div>
      <div className="left">
        <img src={Image} alt="Image" />
      </div>
    </header>
  );
}

export default Header;
