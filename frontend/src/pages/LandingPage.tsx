import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  ThemeProvider,
} from "@mui/material";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import theme from "../theme/theme";

export default function LandingPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Convert username to lowercase to make it case-insensitive
      await login(username.trim().toLowerCase(), password);
      navigate("/");
    } catch (err: any) {
      setError(
        err?.response?.data?.detail ??
          err?.message ??
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated) {
    navigate("/");
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          background:
            "linear-gradient(135deg,rgb(183, 211, 239) 0%, #E2E8F0 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 0,
          m: 0,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "auto",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
            zIndex: 1,
            py: 2,
            maxHeight: "100vh",
            overflow: "auto",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 1,
            }}
          >
            <img
              src="/VIMS4ALL_logo_large_no_background.jpeg"
              alt="VIMS4ALL"
              style={{
                maxWidth: "320px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1))",
              }}
            />
          </Box>

          {/* Title */}
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 0,
              fontWeight: 700,
              color: "#1565C0",
            }}
          >
            Vocational
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 700,
              color: "#1565C0",
            }}
          >
            Institute Management System
          </Typography>

          <Typography
            variant="body2"
            align="center"
            sx={{
              mb: 2,
              color: "#64748B",
            }}
          >
            Sign in to access your account
          </Typography>

          {/* Login Card */}
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 3,
              backgroundColor: "rgba(241, 241, 241, 0.57)",
              boxShadow: "0px 8px 32px rgba(52, 124, 207, 0.35)",
            }}
          >
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  background:
                    "linear-gradient(135deg, #0D47A1 0%, #42A5F5 100%)",
                  boxShadow: "0px 4px 12px rgba(21, 101, 192, 0.3)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)",
                    boxShadow: "0px 6px 16px rgba(21, 101, 192, 0.4)",
                  },
                }}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Box>

            <Typography
              variant="caption"
              color="text.secondary"
              align="center"
              sx={{ mt: 2, display: "block" }}
            >
              Need help? Contact your institution administrator
            </Typography>
          </Paper>

          {/* License Notice */}
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="caption" sx={{ color: "#64748B", display: "block", lineHeight: 1.8 }}>
              &copy; 2025&ndash;{new Date().getFullYear()}{" "}
              <a href="mailto:rado.chobanov97@gmail.com" style={{ color: "#64748B" }}>Radoslav Chobanov</a>
              {" "}&amp;{" "}
              <a href="mailto:Herbert.Wenk@HGWconsult.de" style={{ color: "#64748B" }}>Herbert Wenk</a>
            </Typography>
            <Typography variant="caption" sx={{ color: "#64748B", display: "block", lineHeight: 1.8 }}>
              This software is free and open source, licensed under the{" "}
              <a
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1565C0", textDecoration: "none", fontWeight: 500 }}
              >
                GNU General Public License v3
              </a>
              .
            </Typography>
            <Typography variant="caption" sx={{ color: "#94A3B8", display: "block", lineHeight: 1.8 }}>
              You are free to use, modify, and redistribute this software under the same terms.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
