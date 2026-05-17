// EventCard.jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 70,
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: "90%",
            maxWidth: "384px",
            pointerEvents: "auto",
          }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
            {children}
          </div>
        </motion.div>
      </div>
    </>,
    document.body
  );
};

const SingleEventCard = ({ eventData }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4"

            
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">Hotel Marriott</h3>
        </div>
        <p className="text-sm text-gray-500">Alojamiento recomendado</p>

        <div className="space-y-3 text-gray-600">
          <button
            onClick={() => setShowDetails(true)}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(10px, 1.5vw, 12px)",
              letterSpacing: "0.25em",
              color: "#8FA886",
              background: "none",
              border: "1px solid rgba(149,165,141,0.4)",
              borderRadius: "2px",
              padding: "6px 16px",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            Ver detalles
          </button>
        </div>
      </motion.div>

      <Modal isOpen={showDetails} onClose={() => setShowDetails(false)}>
        <div className="space-y-5">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">Hotel Marriott</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowDetails(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Subtítulo */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#8FA886",
              textTransform: "uppercase",
            }}
          >
            Detalles para quedarse
          </p>

          {/* Instrucciones */}
          <p className="text-sm text-gray-600 leading-relaxed">
            Solicita tu reserva indicando la tarifa especial{" "}
            <span className="font-medium text-gray-800">
              "Social Boda Quirós Castillo"
            </span>
            .
          </p>

          {/* Botones de contacto */}
          <div className="space-y-2 pt-1">
            <a 
              href="tel:22980880"
              className="flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#8FA886]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Llamada</p>
                <p className="text-gray-700 font-medium">2298 0880</p>
              </div>
            </a>

            <a
              href="https://wa.me/50670510292"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#8FA886]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase tracking-widest">WhatsApp</p>
                <p className="text-gray-700 font-medium">7051 0292</p>
              </div>
            </a>
          </div>

        </div>
      </Modal>
    </>
  );
};

const EventCards = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <SingleEventCard key={index} eventData={event} />
      ))}
    </div>
  );
};

export default EventCards;