import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2, MessageCircle, FileSpreadsheet, Download, RefreshCw } from 'lucide-react';
import { servicesData, holidayPackages } from '../data/servicesData';
import { ServiceItem, SpreadsheetBooking } from '../types';

interface BookingSectionProps {
  selectedService: ServiceItem | null;
  onClearSelectedService: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedService, onClearSelectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: selectedService ? selectedService.id : servicesData[0].id,
    date: '',
    time: '11:00 AM',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{ id: string; timestamp: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Spreadsheet logs modal state for owner/manager inspection
  const [showSpreadsheetModal, setShowSpreadsheetModal] = useState(false);
  const [spreadsheetData, setSpreadsheetData] = useState<SpreadsheetBooking[]>([]);
  const [loadingSpreadsheet, setLoadingSpreadsheet] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        serviceId: selectedService.id
      }));
    }
  }, [selectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const matchedService = servicesData.find(s => s.id === formData.serviceId);
    const matchedPackage = holidayPackages.find(p => p.id === formData.serviceId);
    const serviceName = matchedService ? matchedService.name : (matchedPackage ? matchedPackage.name : 'General Treatment');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: serviceName,
          date: formData.date || 'Flexible / Next Available',
          time: formData.time,
          notes: formData.notes
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setBookingConfirmation({
          id: result.bookingId,
          timestamp: result.timestamp
        });
      } else {
        setErrorMsg(result.error || 'Something went wrong logging your booking. Please try again or WhatsApp directly.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please try again or click WhatsApp to message Roxanne directly.');
    } finally {
      setLoading(false);
    }
  };

  const fetchSpreadsheetLogs = async () => {
    setLoadingSpreadsheet(true);
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setSpreadsheetData(data);
      }
    } catch (err) {
      console.error('Failed to load spreadsheet logs', err);
    } finally {
      setLoadingSpreadsheet(false);
    }
  };

  const handleOpenSpreadsheet = () => {
    setShowSpreadsheetModal(true);
    fetchSpreadsheetLogs();
  };

  const selectedServiceName = servicesData.find(s => s.id === formData.serviceId)?.name || 'Treatment';

  return (
    <section className="py-16 bg-[#FFFFFF] border-b border-[#E5E5E5]" id="book">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#D4A59A] mb-1">
            Direct Online Booking
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C]">
            Book Your Appointment
          </h2>
          <p className="text-sm text-[#8C8C8C] mt-1 max-w-md mx-auto">
            Select your preferred time without the DM wait. Automatically saved to our salon scheduling log.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#F9F7F5] border border-[#E5E5E5] rounded-[8px] p-6 sm:p-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 size={36} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2C2C2C]">
                Booking Confirmed!
              </h3>

              <p className="text-sm text-[#2C2C2C] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="font-semibold">{formData.name}</strong>. Your request for <strong className="font-semibold">{selectedServiceName}</strong> has been logged to Beauty By Roxanne's salon spreadsheet.
              </p>

              <div className="bg-[#FFFFFF] p-4 rounded-[8px] border border-[#E5E5E5] text-xs text-left max-w-sm mx-auto space-y-1.5">
                <p><span className="text-[#8C8C8C]">Booking Ref:</span> <strong className="text-[#2C2C2C] font-mono">{bookingConfirmation?.id}</strong></p>
                <p><span className="text-[#8C8C8C]">Logged At:</span> <span className="text-[#2C2C2C]">{bookingConfirmation?.timestamp}</span></p>
                <p><span className="text-[#8C8C8C]">Contact Phone:</span> <span className="text-[#2C2C2C]">{formData.phone}</span></p>
                <p><span className="text-[#8C8C8C]">Preferred Time:</span> <span className="text-[#2C2C2C]">{formData.date || 'Flexible'} ({formData.time})</span></p>
              </div>

              <p className="text-xs text-[#8C8C8C] max-w-sm mx-auto">
                Roxanne will text or call your mobile shortly to confirm final slot details.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClearSelectedService();
                  }}
                  className="bg-[#D4A59A] text-white text-xs font-semibold px-5 py-2.5 rounded-[8px] hover:bg-[#C08E82] cursor-pointer"
                >
                  Book Another Treatment
                </button>

                <a
                  href={`https://wa.me/447469170342?text=${encodeURIComponent(`Hi Roxanne, I just submitted a booking online (Ref: ${bookingConfirmation?.id}) for ${selectedServiceName}. Looking forward to my appointment!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebf59] text-white text-xs font-semibold px-5 py-2.5 rounded-[8px] flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle size={14} />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Service Selection */}
              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-1">
                  1. Select Treatment
                </label>
                <select
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleInputChange}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-[#D4A59A] rounded-[8px] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none"
                >
                  <optgroup label="Core Treatments">
                    {servicesData.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.price} • {s.duration})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Holiday Packages">
                    {holidayPackages.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.price} • {p.duration})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-1">
                    2. Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-[#D4A59A] rounded-[8px] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-1">
                    3. Time Slot
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-[#D4A59A] rounded-[8px] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none"
                  >
                    <option value="09:30 AM">09:30 AM (Morning)</option>
                    <option value="11:00 AM">11:00 AM (Mid-Morning)</option>
                    <option value="01:30 PM">01:30 PM (Lunch Break)</option>
                    <option value="03:30 PM">03:30 PM (Afternoon)</option>
                    <option value="05:30 PM">05:30 PM (Early Evening)</option>
                    <option value="07:00 PM">07:00 PM (Thu Late Slot)</option>
                  </select>
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-1">
                    4. Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-[#D4A59A] rounded-[8px] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-1">
                    5. Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="07123 456789"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-[#D4A59A] rounded-[8px] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none"
                  />
                </div>
              </div>

              {/* Optional Email & Notes */}
              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-1">
                  6. Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="sarah@example.co.uk"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-[#D4A59A] rounded-[8px] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2C2C2C] uppercase tracking-wider mb-1">
                  7. Special Notes or Skin Concerns
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="e.g. Pre-holiday facial, sensitive skin, or preference for lighter massage pressure..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full bg-[#FFFFFF] border border-[#E5E5E5] focus:border-[#D4A59A] rounded-[8px] px-3.5 py-2.5 text-sm text-[#2C2C2C] focus:outline-none resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-[8px] text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Form Action Buttons: Submit & WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 bg-[#D4A59A] hover:bg-[#C08E82] active:scale-98 text-white font-semibold text-sm py-3 px-5 rounded-[8px] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Calendar size={16} />
                  <span>{loading ? 'Logging to Spreadsheet...' : 'Confirm Online Booking'}</span>
                </button>

                {/* WhatsApp click-to-chat requirement */}
                <a
                  href={`https://wa.me/447469170342?text=${encodeURIComponent(`Hi Roxanne, I would like to enquire about booking a treatment at The Didsbury Salon.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebf59] active:scale-98 text-white font-semibold text-xs py-3 px-4 rounded-[8px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                  title="Click to chat directly with Roxanne on WhatsApp"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </form>
          )}

          {/* Owner Spreadsheet connector shortcut note */}
          <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#8C8C8C]">
            <span className="flex items-center gap-1">
              <FileSpreadsheet size={14} className="text-[#D4A59A]" />
              <span>Google Sheets Connector active</span>
            </span>

            <button
              onClick={handleOpenSpreadsheet}
              className="text-[#2C2C2C] hover:text-[#D4A59A] font-semibold underline cursor-pointer"
            >
              Owner View: Salon Spreadsheet Logs
            </button>
          </div>
        </div>
      </div>

      {/* Owner Spreadsheet Drawer/Modal */}
      {showSpreadsheetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-[8px] max-w-2xl w-full p-6 shadow-none max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <FileSpreadsheet size={20} className="text-[#D4A59A]" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#2C2C2C]">
                    Salon Google Sheets Log
                  </h3>
                  <p className="text-xs text-[#8C8C8C]">
                    Real-time bookings received directly from the website
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={fetchSpreadsheetLogs}
                  className="p-1.5 text-[#2C2C2C] hover:bg-[#F9F7F5] rounded border border-[#E5E5E5] cursor-pointer"
                  title="Refresh logs"
                >
                  <RefreshCw size={14} className={loadingSpreadsheet ? 'animate-spin' : ''} />
                </button>
                <a
                  href="/api/bookings/export.csv"
                  download
                  className="flex items-center gap-1 text-xs font-semibold bg-[#2C2C2C] text-white px-3 py-1.5 rounded cursor-pointer hover:bg-black"
                >
                  <Download size={12} />
                  <span>Export CSV</span>
                </a>
                <button
                  onClick={() => setShowSpreadsheetModal(false)}
                  className="text-xs font-semibold text-[#8C8C8C] hover:text-[#2C2C2C] px-2 py-1 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="overflow-x-auto flex-1 border border-[#E5E5E5] rounded">
              {spreadsheetData.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#8C8C8C]">
                  No bookings logged yet. Submit a booking test above to see it populate here instantly!
                </div>
              ) : (
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F9F7F5] border-b border-[#E5E5E5] font-bold text-[#2C2C2C]">
                    <tr>
                      <th className="p-2.5">Ref ID</th>
                      <th className="p-2.5">Timestamp</th>
                      <th className="p-2.5">Customer Name</th>
                      <th className="p-2.5">Phone</th>
                      <th className="p-2.5">Service</th>
                      <th className="p-2.5">Slot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5]">
                    {spreadsheetData.map((b) => (
                      <tr key={b.id} className="hover:bg-[#F9F7F5]">
                        <td className="p-2.5 font-mono font-bold text-[#D4A59A]">{b.id}</td>
                        <td className="p-2.5 text-[#8C8C8C] whitespace-nowrap">{b.timestamp}</td>
                        <td className="p-2.5 font-semibold text-[#2C2C2C]">{b.name}</td>
                        <td className="p-2.5 text-[#2C2C2C]">{b.phone}</td>
                        <td className="p-2.5 text-[#2C2C2C] font-medium">{b.service}</td>
                        <td className="p-2.5 text-[#2C2C2C]">{b.date} ({b.time})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <p className="mt-3 text-[11px] text-[#8C8C8C] text-center">
              Rows are automatically appended to <code className="bg-[#F9F7F5] px-1 py-0.5 rounded border border-[#E5E5E5]">bookings_spreadsheet.csv</code>.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
