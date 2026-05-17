/**
 * Copyright (c) 2024-present mrofisr
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// src/App.jsx
import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Heart } from "lucide-react";

import { useInvitation } from "@/features/invitation";
import { useAudio } from "@/hooks/use-audio";

import staticConfig from "@/config/config";
import invitados from "@/data/invitados";

// Lazy load components
const Layout = lazy(() => import("@/components/layout/layout"));

const MainContent = lazy(
  () => import("@/features/invitation/components/main-content"),
);

const LandingPage = lazy(
  () => import("@/features/invitation/components/landing-page"),
);

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const { config, isLoading, error } = useInvitation();

  // Obtener ID desde la URL
  // Ejemplo:
  // localhost:5173/?id=8K9P2X

  const queryParams = new URLSearchParams(window.location.search);

  const id = queryParams.get("id");

  // Buscar invitado

  const invitado = invitados.find(
    (item) => item.id === id
  );

  // Validar invitación

  if (!invitado) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#CBC8C4" }}
      >
        <div className="text-center p-6">
          <Heart
            className="h-12 w-12 mx-auto mb-4"
            style={{ color: "#2A3B27" }}
            fill="currentColor"
          />

          <h1
            className="text-2xl font-serif mb-2"
            style={{ color: "#2A3B27" }}
          >
            Invitación no válida
          </h1>

          <p style={{ color: "#70805D" }}>
            El enlace de invitación no existe.
          </p>
        </div>
      </div>
    );
  }

  // Configuración activa

  const activeConfig = config || staticConfig.data;

  // Audio

  const audioControls = useAudio({
    src: activeConfig?.audio?.src || "/audio/fulfilling-humming.mp3",
    loop: activeConfig?.audio?.loop !== false,
  });

  // Abrir invitación

  const handleOpenInvitation = async () => {
    await audioControls.play();
    setIsInvitationOpen(true);
  };

  // Loading

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#CBC8C4" }}
      >
        <div className="text-center">
          <Heart
            className="h-12 w-12 mx-auto mb-4 animate-pulse"
            style={{ color: "#2A3B27" }}
            fill="currentColor"
          />

          <p style={{ color: "#70805D" }}>
            Cargando invitación...
          </p>
        </div>
      </div>
    );
  }

  // Error

  if (error) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#CBC8C4" }}
      >
        <div className="text-center p-6">
          <div
            className="text-6xl mb-4"
            style={{ color: "#2A3B27" }}
          >
            !
          </div>

          <h1
            className="text-2xl font-serif mb-2"
            style={{ color: "#2A3B27" }}
          >
            Error
          </h1>

          <p style={{ color: "#70805D" }}>
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {activeConfig.title}
        </title>

        <meta
          name="title"
          content={activeConfig.title}
        />

        <meta
          name="description"
          content={activeConfig.description}
        />

        <meta
          name="robots"
          content="noindex, nofollow, noarchive, nocache"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content={window.location.href}
        />

        <meta
          property="og:title"
          content={activeConfig.title}
        />

        <meta
          property="og:description"
          content={activeConfig.description}
        />

        <meta
          property="og:image"
          content={activeConfig.ogImage}
        />

        <meta
          property="twitter:card"
          content="summary_large_image"
        />

        <meta
          property="twitter:url"
          content={window.location.href}
        />

        <meta
          property="twitter:title"
          content={activeConfig.title}
        />

        <meta
          property="twitter:description"
          content={activeConfig.description}
        />

        <meta
          property="twitter:image"
          content={activeConfig.ogImage}
        />

        <link
          rel="icon"
          type="image/x-icon"
          href={activeConfig.favicon}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="theme-color"
          content="#FDA4AF"
        />
      </Helmet>

      <Suspense fallback={null}>
        <AnimatePresence mode="wait">
          {!isInvitationOpen ? (
            <LandingPage
              onOpenInvitation={handleOpenInvitation}
              invitado={invitado}
            />
          ) : (
            <Layout audioControls={audioControls}>
              <MainContent invitado={invitado} />
            </Layout>
          )}
        </AnimatePresence>
      </Suspense>
    </HelmetProvider>
  );
}

export default App;