import { createTheme, alpha } from "@mui/material/styles";

// Design tokens shared by the MUI theme and plain CSS (see index.css :root).
export const tokens = {
  bg: "#06060c",
  bgRaised: "#0c0c18",
  surface: "rgba(255, 255, 255, 0.035)",
  surfaceHover: "rgba(255, 255, 255, 0.06)",
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",
  text: "#eceef5",
  muted: "#9499ad",
  cyan: "#22d3ee",
  violet: "#a78bfa",
  pink: "#f472b6",
  gradient: "linear-gradient(120deg, #22d3ee 0%, #a78bfa 50%, #f472b6 100%)",
};

const display = "'Space Grotesk', 'Inter', system-ui, sans-serif";
const body = "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: tokens.cyan, contrastText: "#041015" },
    secondary: { main: tokens.pink },
    info: { main: tokens.violet },
    background: { default: tokens.bg, paper: tokens.bgRaised },
    text: { primary: tokens.text, secondary: tokens.muted },
    divider: tokens.border,
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: body,
    h1: { fontFamily: display, fontWeight: 700, letterSpacing: "-0.04em" },
    h2: { fontFamily: display, fontWeight: 700, letterSpacing: "-0.03em" },
    h3: { fontFamily: display, fontWeight: 700, letterSpacing: "-0.03em" },
    h4: { fontFamily: display, fontWeight: 600, letterSpacing: "-0.02em" },
    h5: { fontFamily: display, fontWeight: 600, letterSpacing: "-0.01em" },
    h6: { fontFamily: display, fontWeight: 600 },
    button: { fontFamily: display, fontWeight: 600, textTransform: "none", letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { backgroundColor: tokens.bg } },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: tokens.surface,
          border: `1px solid ${tokens.border}`,
          backdropFilter: "blur(14px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 20 } },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(12, 12, 24, 0.92)",
          border: `1px solid ${tokens.borderStrong}`,
          borderRadius: 20,
          boxShadow: `0 30px 80px -20px ${alpha(tokens.violet, 0.35)}`,
        },
        paperFullScreen: { borderRadius: 0, border: "none" },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: { backgroundColor: "rgba(3, 3, 8, 0.7)", backdropFilter: "blur(6px)" },
        invisible: { backgroundColor: "transparent", backdropFilter: "none" },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0, color: "transparent" },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          border: "none",
          borderBottom: `1px solid ${tokens.border}`,
          backdropFilter: "blur(14px)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22, transition: "all .25s ease" },
        contained: {
          background: tokens.gradient,
          backgroundSize: "200% 100%",
          color: "#07070d",
          boxShadow: `0 0 0 0 ${alpha(tokens.violet, 0)}`,
          "&:hover": {
            backgroundPosition: "100% 0",
            boxShadow: `0 8px 30px -6px ${alpha(tokens.violet, 0.7)}`,
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderColor: tokens.borderStrong,
          color: tokens.text,
          backgroundColor: tokens.surface,
          backdropFilter: "blur(10px)",
          "&:hover": {
            borderColor: tokens.cyan,
            backgroundColor: alpha(tokens.cyan, 0.08),
            boxShadow: `0 0 24px -6px ${alpha(tokens.cyan, 0.6)}`,
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { transition: "all .2s ease", "&:hover": { backgroundColor: alpha(tokens.cyan, 0.1) } },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          backgroundColor: tokens.surface,
          backdropFilter: "blur(10px)",
          "& fieldset": { borderColor: tokens.border },
          "&:hover fieldset": { borderColor: tokens.borderStrong },
          "&.Mui-focused fieldset": { borderColor: tokens.cyan },
          "&.Mui-focused": { boxShadow: `0 0 0 4px ${alpha(tokens.cyan, 0.12)}` },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { borderColor: tokens.border },
        head: {
          backgroundColor: tokens.bgRaised,
          color: tokens.muted,
          fontFamily: "'JetBrains Mono', monospace",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: { transition: "background .2s", "&:hover": { backgroundColor: tokens.surfaceHover } },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.surface,
          "&::before": { display: "none" },
          "&.Mui-expanded": { borderColor: alpha(tokens.cyan, 0.4) },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999, fontWeight: 500, backdropFilter: "blur(10px)" },
        outlined: { borderColor: tokens.borderStrong, backgroundColor: tokens.surface },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#15152a",
          border: `1px solid ${tokens.borderStrong}`,
          fontSize: 12,
        },
      },
    },
  },
});

export default theme;
