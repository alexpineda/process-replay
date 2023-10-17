import { getChkChunks } from "./chunks";
import Orchestrate from "./downgraders/orchestrate";

export class ChkDowngrader {
    downgrade( buf: Buffer ) {
        const chunks = getChkChunks( buf );
        const orchestrate = new Orchestrate( chunks );

        if ( orchestrate.isSCR ) {
            return orchestrate.downgrade();
        } else {
            return buf;
        }
    }
}