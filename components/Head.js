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
    `}</style>
  </div>
)