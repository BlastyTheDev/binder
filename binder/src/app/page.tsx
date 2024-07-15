import { MDXRemote } from 'next-mdx-remote/rsc';
import * as fs from 'fs';

export default function Overview() {
    const overviewMdx = fs.readFileSync('./src/resources/overview.md');
    return (
        <div className="overview">
            <MDXRemote source={overviewMdx}/>
        </div>
    );
}