import Head from 'next/head'

export default () => (
  <div>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-big-calendar@0.17.0/lib/css/react-big-calendar.css"/>
    </Head>
    <style jsx global>{`
    .rbc-time-header > .rbc-row:nth-of-type(2) {
        display: none !important;
    }
    .cal{height: 90vh}
    input{
        margin-bottom: 0;
        width: 100%;
        border: none;
        border-bottom:none;
        padding: 14px 8px;
        box-sizing: border-box;
        background-image: url('http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-hi.png');
        background-size: 20px 20px;
        background-position: 10px 10px; 
        padding-left: 40px;
        background-repeat: no-repeat;
    }
    .menu {
        font-size: 16px;
        height: 80vh;
        overflow-y: scroll;
        border: 1px solid black;
    }
    .searchElem {
        padding-left: 50px;
    }
    .searchElem:hover{
        background-color: red;
    }
    `}</style>
  </div>
)