export interface ServiceItem {
  id: string;
  name: string;
  tagLine: string;
  price: string;
  duration: string;
  tags: string[];
  description: string;
  benefits: string[];
  aftercare: string;
  imageUrl: string;
  category: 'Relax' | 'Refresh' | 'Maintain';
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export interface SpreadsheetBooking {
  id: string;
  timestamp: string;
  isoDate: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  status: string;
}
