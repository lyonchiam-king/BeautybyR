import { ServiceItem } from '../types';
import { salonImages } from './images';

export const servicesData: ServiceItem[] = [
  {
    id: 'dermaplaning-facial',
    name: 'Dermaplaning Facial',
    tagLine: 'Smooth, Brighter Skin',
    price: '£45',
    duration: '45 mins',
    tags: ['Popular', 'Exfoliation', 'Instant Glow'],
    description: 'Gentle medical-grade manual exfoliation removing fine vellus hair (peach fuzz) and dead skin cells. Unveils a silky smooth, glowing canvas for effortless makeup application and maximum product absorption.',
    benefits: [
      'Removes dead skin cells and fine facial peach fuzz',
      'Instant bright skin texture before holidays or events',
      'Enhances absorption of serums and moisturizers',
      'Non-invasive with zero downtime'
    ],
    aftercare: 'Wear SPF 30+ daily and avoid harsh exfoliants for 72 hours.',
    imageUrl: salonImages.dermaplaning,
    category: 'Refresh'
  },
  {
    id: 'full-body-massage',
    name: 'Full Body Massage',
    tagLine: 'Deep Relaxation',
    price: '£55',
    duration: '60 mins',
    tags: ['Relaxation', 'Tension Relief', 'Aromatherapy'],
    description: 'A deeply soothing full body massage customized to ease muscular tightness, relieve stress from busy work routines, and promote restful calm in a private, quiet setting.',
    benefits: [
      'Relieves chronic shoulder, back, and neck tension',
      'Promotes deep lymphatic circulation and physical ease',
      'Uses organic calming botanical massage oils',
      'Tailored pressure levels to your comfort'
    ],
    aftercare: 'Drink plenty of water post-treatment and allow time to rest.',
    imageUrl: salonImages.massage,
    category: 'Relax'
  },
  {
    id: 'hydrating-facial',
    name: 'Hydrating Facial',
    tagLine: 'Glow Restoration',
    price: '£50',
    duration: '50 mins',
    tags: ['Deep Moisture', 'Barrier Repair', 'Plumping'],
    description: 'Intensive moisture-boosting treatment tailored for dehydrated or tired skin. Combines gentle cleansing, soothing facial massage, and a concentrated hyaluronic acid mask.',
    benefits: [
      'Restores essential skin hydration barrier',
      'Plumps fine lines and smooths dull complexion',
      'Soothes skin exposed to environmental stress or sun',
      'Includes calming face, neck and shoulder massage'
    ],
    aftercare: 'Keep skin hydrated with gentle moisturiser and drink water.',
    imageUrl: salonImages.hydrating,
    category: 'Refresh'
  },
  {
    id: 'eyebrow-treatment',
    name: 'Eyebrow Treatment',
    tagLine: 'Defined Shape',
    price: '£25',
    duration: '30 mins',
    tags: ['Precision Wax', 'Custom Tint', 'Low Maintenance'],
    description: 'Bespoke brow mapping, custom tint formulation, and precise waxing to create flattering, natural brow definition that highlights your facial features.',
    benefits: [
      'Precision mapping tailored to your face structure',
      'Custom tinting matching your hair tone',
      'Crisp, clean finish with soothing aloe post-care',
      'Long-lasting definition for weeks'
    ],
    aftercare: 'Avoid hot showers, steam, and harsh facial cleansers on brows for 24 hours.',
    imageUrl: salonImages.eyebrow,
    category: 'Maintain'
  }
];

export const holidayPackages = [
  {
    id: 'pre-holiday-glow',
    name: 'Pre-Holiday Glow Package',
    tagLine: 'Dermaplaning Facial + Brow Sculpt',
    price: '£65',
    savings: 'Save £5',
    duration: '75 mins',
    description: 'The ultimate prep package before heading on holiday. Combines smooth Dermaplaning facial exfoliation with custom brow tinting and waxing.'
  },
  {
    id: 'ultimate-sanctuary-reset',
    name: 'Total Sanctuary Reset',
    tagLine: 'Full Body Massage + Hydrating Facial',
    price: '£95',
    savings: 'Save £10',
    duration: '110 mins',
    description: 'Complete relaxation experience combining a 60-minute stress-relief body massage with an intensive hydrating facial.'
  }
];
