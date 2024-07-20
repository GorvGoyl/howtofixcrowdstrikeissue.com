import { Footer } from '../components/footer';
import { HeroImg } from '../components/hero';

function Home() {
    return (
        <main className="prose prose-slate mx-auto mt-16 flex w-full max-w-screen-xl flex-col items-center bg-slate-50 p-4 md:p-8">
            <HeroImg />
            <h1
                className="my-14 text-center"
                id="is-crowdstrike-issue-fixed">
                How to Fix CrowdStrike Issue?
            </h1>
            <TroubleshootingGuide />
            <Footer />
        </main>
    );
}

function TroubleshootingGuide() {
    return (
        <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h1 className="mb-4 text-2xl font-bold">Workaround Steps for Individual Computers</h1>

            <div>
                <p className="text-sm text-slate-600">
                    Reference:{' '}
                    <a
                        target="_blank"
                        className="text-slate-600"
                        href="https://www.crowdstrike.com/blog/statement-on-falcon-content-update-for-windows-hosts/">
                        CrowdStrike's Website
                    </a>
                </p>
            </div>

            <h2 className="mb-2 text-xl font-semibold">Step 1: Reboot the Computer</h2>
            <ol className="mb-4 ml-5 list-decimal">
                <li className="mb-2">
                    <strong>Connect to a Wired Network:</strong> Plug an Ethernet cable into your computer for a faster
                    and more reliable internet connection than Wi-Fi.
                </li>
                <li className="mb-2">
                    <strong>Restart the Computer:</strong> Click the Start menu, select the Power icon, and choose
                    Restart. This allows the computer to download necessary files.
                </li>
                <li className="mb-2">
                    <strong>Check for Crashes:</strong> After restarting, see if the computer crashes again. If it does,
                    move on to the next steps.
                </li>
            </ol>

            <h2 className="mb-2 text-xl font-semibold">Step 2: Boot into Safe Mode or Windows Recovery Environment</h2>
            <ol className="mb-4 ml-5 list-decimal">
                <li className="mb-2">
                    <strong>Enter Safe Mode:</strong> Press and hold the <code>Shift</code> key, then click Restart from
                    the Start menu. Your computer will restart and display a menu. If this doesn't work, alternatively,
                    hold down the <code>F8</code> key before the Windows logo appears on the screen. <br /> Select
                    Troubleshoot &gt; Advanced options &gt; Startup Settings &gt; Restart. After restarting, select
                    option 4 (Safe Mode) or option 5 (Safe Mode with Networking) by pressing the corresponding number on
                    your keyboard.
                </li>
                <li className="mb-2">
                    <strong>Use Safe Mode with Networking:</strong> This option helps by allowing internet access to
                    download necessary files while in Safe Mode.
                </li>
            </ol>

            <h2 className="mb-2 text-xl font-semibold">Step 3: Navigate to the CrowdStrike Directory</h2>
            <ol className="mb-4 ml-5 list-decimal">
                <li className="mb-2">
                    <strong>Open Command Prompt:</strong> In Safe Mode or the Windows Recovery Environment, select
                    Troubleshoot &gt; Advanced options &gt; Command Prompt.
                </li>
                <li className="mb-2">
                    <strong>Go to the Correct Drive:</strong> Type <code>C:</code> and press Enter to switch to the C:
                    drive (most common drive for Windows installations). Then type{' '}
                    <code>cd windows\system32\drivers\crowdstrike</code> and press Enter to go to the CrowdStrike
                    folder.
                </li>
                <li className="mb-2">
                    <strong>If C: Drive is Not the Windows Drive:</strong> The drive letter might be different in the
                    Windows Recovery Environment. Try other letters like <code>D:</code> or <code>E:</code> until you
                    find the correct one. Then navigate to the CrowdStrike folder using the same <code>cd</code>{' '}
                    command.
                </li>
            </ol>

            <h2 className="mb-2 text-xl font-semibold">Step 4: Delete the Specific File</h2>
            <ol className="mb-4 ml-5 list-decimal">
                <li className="mb-2">
                    <strong>Find the File:</strong> In the Command Prompt, type <code>dir C-00000291*.sys</code> and
                    press Enter. This will list the file you need to delete.
                </li>
                <li className="mb-2">
                    <strong>Delete the File:</strong> Type <code>del C-00000291*.sys</code> and press Enter to delete
                    the file. Be very careful not to delete any other files or folders.
                </li>
            </ol>

            <h2 className="mb-2 text-xl font-semibold">Step 5: Cold Boot the Computer</h2>
            <ol className="mb-4 ml-5 list-decimal">
                <li className="mb-2">
                    <strong>Shutdown the Computer:</strong> Press and hold the power button until the computer turns
                    off.
                </li>
                <li className="mb-2">
                    <strong>Start the Computer:</strong> Press the power button to turn the computer back on.
                </li>
            </ol>

            <h2 className="mb-2 text-xl font-semibold">Note for Bitlocker-Encrypted Computers</h2>
            <p className="mb-4">
                <strong>Recovery Key:</strong> If your computer is encrypted with Bitlocker, you may need to enter your
                recovery key during this process. Make sure you have it handy.
            </p>

            <h2 className="mb-2 text-xl font-semibold">Additional Information</h2>
            <ul className="mb-4 ml-5 list-disc">
                <li className="mb-2">
                    <strong>Wired Connection:</strong> Using a wired Ethernet connection during these steps ensures a
                    stable and fast internet connection for downloading necessary files.
                </li>
                <li className="mb-2">
                    <strong>Safe Mode and Windows Recovery Environment:</strong> These special modes load only essential
                    system files and drivers, making it easier to fix problems.
                </li>
            </ul>
        </div>
    );
}

export default Home;
