import "../globals.css";

export default function Wave() {
    return (
        <div className="fixed bottom-0 w-full h-full overflow-hidden -z-10">
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    );
}