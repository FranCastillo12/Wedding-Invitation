// EventCard.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  X,
  Globe,
  Apple,
  Calendar as CalendarIcon
} from 'lucide-react';
import { formatEventDate } from '@/lib/format-event-date';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm"
          >
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CalendarButton = ({ icon: Icon, label, onClick, className = "" }) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center space-x-3 w-full p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="w-5 h-5" />
    <span className="text-gray-700 font-medium">{label}</span>
  </motion.button>
);

const SingleEventCard = ({ eventData }) => {
  const [showDetails, setShowDetails] = useState(false);

  const googleCalendarLink = () => {
    const startDate = new Date(`${eventData.date}T${eventData.startTime}:00`);
    const endDate = new Date(`${eventData.date}T${eventData.endTime}:00`);
    const formatDate = (date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventData.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(eventData.description)}&location=${encodeURIComponent(eventData.location)}&ctz=${eventData.timeZone}`;
  };

  const generateICSContent = () => {
    const startDate = new Date(`${eventData.date}T${eventData.startTime}:00`);
    const endDate = new Date(`${eventData.date}T${eventData.endTime}:00`);
    const formatICSDate = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    return `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nURL:${window.location.href}\nDTSTART:${formatICSDate(startDate)}\nDTEND:${formatICSDate(endDate)}\nSUMMARY:${eventData.title}\nDESCRIPTION:${eventData.description}\nLOCATION:${eventData.location}\nEND:VEVENT\nEND:VCALENDAR`;
  };

  const downloadICSFile = () => {
    const blob = new Blob([generateICSContent()], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${eventData.title.toLowerCase().replace(/ /g, '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{eventData.title}</h3>
        </div>

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

      {/* Modal FUERA del div con position relative */}
      <Modal isOpen={showDetails} onClose={() => setShowDetails(false)}>
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">{eventData.title}</h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowDetails(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="space-y-3 text-gray-600">
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-[#8FA886]" />
              <span className="text-sm">{formatEventDate(eventData.date)}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#8FA886]" />
              <span className="text-sm">{eventData.startTime} – {eventData.endTime}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#8FA886]" />
              <span className="text-sm">{eventData.location}</span>
            </div>
            {eventData.description && (
              <p className="text-sm text-gray-500 pt-1">{eventData.description}</p>
            )}
          </div>

          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3 tracking-widest uppercase">Agregar al calendario</p>
            <div className="space-y-2">
              <CalendarButton
                icon={(props) => <Globe {...props} className="w-5 h-5 text-rose-500" />}
                label="Google Calendar"
                onClick={() => window.open(googleCalendarLink(), '_blank')}
              />
              <CalendarButton
                icon={(props) => <Apple {...props} className="w-5 h-5 text-gray-900" />}
                label="Apple Calendar"
                onClick={downloadICSFile}
              />
              <CalendarButton
                icon={(props) => <CalendarIcon {...props} className="w-5 h-5 text-blue-600" />}
                label="Outlook Calendar"
                onClick={downloadICSFile}
              />
            </div>
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