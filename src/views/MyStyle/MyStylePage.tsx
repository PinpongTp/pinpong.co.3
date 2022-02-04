function MyStylePage() {
    return (
        <>
            {/* <h3>My Style</h3> */}
            <p>
                ไม่มีฟ้อนต์ สไตล์น้อยๆ ลองดูซิว่ามันจะทำให้ชีวิต ยากขึ้นหรือง่ายลง ทั้งหมดของเว็บไซต์ใช้สไตล์หลักๆเท่านี้ อาจจะมีเพิ่มเติมในแต่ละส่วน แต่ก็จะพยายามใช้ให้น้อยที่สุด
            </p>
            <p>
                html {'{'} <br />
                &emsp;max-width: 70ch; <br />
                &emsp;padding: 3em 1em; <br />
                &emsp;margin: auto; <br />
                &emsp;line-height: 1.75; <br />
                &emsp;font-size: 1.25em; <br />
                &emsp;color: #333; <br />
                {'}'}
            </p>
            <p>
                a {'{'} <br />
                &emsp;color: chocolate; <br />
                &emsp;text-decoration: none; <br />
                {'{'}
            </p>
            <p>
                <b>ใช่แล้ว, มันอาจจะดูน้อยมาก แต่มันก็คือภาพที่ทุกคนเห็นอยู่นี้แหละ</b>
                <br />
                <i>
                    ref:{' '}
                    <a
                        href="https://www.swyx.io/css-100-bytes/"
                        target="_blank"
                    >
                        https://www.swyx.io/css-100-bytes/
                    </a>
                </i>
            </p>
        </>
    )
}

export default MyStylePage
