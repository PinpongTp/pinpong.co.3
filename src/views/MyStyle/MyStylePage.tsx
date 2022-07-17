function MyStylePage() {
  return (
    <>
      {/* <h3>My Style</h3> */}
      <p>
        ไม่มีฟ้อนต์ สไตล์น้อยๆ ลองดูซิว่ามันจะทำให้ชีวิต ยากขึ้นหรือง่ายลง ทั้งหมดของเว็บไซต์ใช้สไตล์หลักๆเท่านี้
        อาจจะมีเพิ่มเติมในแต่ละส่วน แต่ก็จะพยายามใช้ให้น้อยที่สุด
      </p>
      <pre>
        <code>
          html {'{'} <br />
          &emsp;&emsp;max-width: 70ch; <br />
          &emsp;&emsp;padding: 3em 1em; <br />
          &emsp;&emsp;margin: auto; <br />
          &emsp;&emsp;line-height: 1.75; <br />
          &emsp;&emsp;font-size: 1.25em; <br />
          &emsp;&emsp;color: #333; <br />
          {'}'}
        </code>
      </pre>
      <pre>
        <code>
          a {'{'} <br />
          &emsp;&emsp;color: chocolate; <br />
          &emsp;&emsp;text-decoration: none; <br />
          {'{'}
        </code>
      </pre>
      <p>
        <b>ใช่แล้ว, มันอาจจะดูน้อยมาก แต่มันก็คือภาพที่ทุกคนเห็นอยู่นี้แหละ</b>
        <br />
        <i>
          ref:{' '}
          <a href="https://www.swyx.io/css-100-bytes/" target="_blank">
            https://www.swyx.io/css-100-bytes/
          </a>
        </i>
      </p>
    </>
  );
}

export default MyStylePage;
