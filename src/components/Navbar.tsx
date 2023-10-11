import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
  preview: boolean;
  setPreview: Dispatch<SetStateAction<boolean>>;
}

//button bg rgba(112, 72, 232, 0.75)

const Navbar = ({ mode, setMode, preview, setPreview }: NavbarProps) => {
  /* const handleModeChange = () => setMode(m => !m);
  const handlePrevChange = () => setPreview(p => !p); */

  console.log(mode);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem"
      }}
    >
      <div style={{ width: "100%", display: "flex", gap: "0.5rem" }}>
        <button className="button primary">asfsd</button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "0.5rem",
          justifyContent: "flex-end"
        }}
      >
        <button>settings</button>
      </div>
    </div>
  );
};

export { Navbar };
