import { RiMoonClearFill } from "react-icons/ri";

function Navbar() {
  return (
    <div
      style={{
        width: "100%",
        height: "7%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}
      >
        <button
          className="button"
          style={{ height: "1.8rem", marginLeft: "0.5rem" }}
        >
          export PDF
        </button>
      </div>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <button
          className="button"
          style={{ width: "1.3rem", height: "1.8rem", marginRight: "0.5rem" }}
        >
          <RiMoonClearFill style={{ marginTop: "0.1rem" }} size={20} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
