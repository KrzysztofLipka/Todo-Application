

export class StringParser {

    static hashtagDatesWithSeparatorMathcer = /((?:\s|^)#(0[1-9]|[12]\d|3[01])[-/.](0[1-9]|1[0-2])[-/.][12]\d{3})/
    static bracketsMatcher = /((?:\s|^)#(\[|\()([^)]+)(\]|\)))/
    static datesMatcher = /((?:\s|^)(0[1-9]|[12]\d|3[01])[-/.](0[1-9]|1[0-2])[-/.][12]\d{3})/

    /*static getTaskListFromString = (title: string): string[] | null => {
        const c = title.match(StringParser.bracketsMatcher);
        if (c != null && c[3] != null) {
            return c[3].split(',')
        }
        else {
            return null
        }

        //return title.match(hashtagMatcher);
    }*/

    /*static getDateFromString = (title: string, withHashtag: boolean): string | null => {
        const c = withHashtag
            ? title.match(StringParser.hashtagDatesWithSeparatorMathcer) :
            title.match(StringParser.datesMatcher);
        if (c != null) {
            return c[0]
                .replace('#', '')
                .replace('/', '.')
                .replace('-', '.');
        } else {
            return null
        }
    }*/
}



//const hashtagMatcher = /(?:\s|^)#[A-Za-z0-9\-\.\_]+(?:\s|$)/;
//const datesMatcher = /((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[12]\d{3})/
//const hashtagDatesMatcher = /((?:\s|^)#(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[12]\d{3})/
