import iconv from "iconv-lite";

const cstring = ( buf: Buffer ) => {
    let text = buf;
    const end = buf.indexOf( 0 );
    if ( end !== -1 ) {
        text = buf.slice( 0, end );
    }

    const string = iconv.decode( text, "cp949" );
    if ( string.includes( "\ufffd" ) ) {
        return iconv.decode( text, "cp1252" );
    } else {
        return string;
    }
};

export default cstring;
