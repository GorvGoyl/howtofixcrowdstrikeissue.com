export function Footer() {
    return (
        <footer className="mx-auto mt-5 max-w-screen-md text-center text-xs text-slate-500">
            <a
                className="text-slate-500"
                target="_blank"
                title="Give feedback on Github"
                href="https://github.com/GorvGoyl/howtofixcrowdstrikeissue.com/issues">
                Feedback
            </a>
            &nbsp;
            {'  '}|{'  '} &nbsp;
            <a
                target="_blank"
                className="text-slate-500"
                title="See source-code on Github"
                href="https://github.com/GorvGoyl/howtofixcrowdstrikeissue.com?tab=readme-ov-file#how-to-improve-the-content">
                Edit
            </a>
        </footer>
    );
}
