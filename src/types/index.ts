// ============================================================================
// TYPESCRIPT DEFINITIONS FOR BGTK SUMATERA SELATAN
// ============================================================================

export type UserRole = "SUPER_ADMIN" | "EDITOR" | "VERIFIER" | "AUDITOR";
export type PublishStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
export type EventStatus = "UPCOMING" | "ONGOING" | "COMPLETED" | "CANCELLED";

export type ComplaintType = "EXTERNAL_SERVICE" | "INTERNAL_WHISTLEBLOW";
export type ComplaintStatus =
  | "SUBMITTED"
  | "VERIFIED"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "REJECTED";

export type AccountabilityCategory =
  | "PERJANJIAN_KINERJA"
  | "LAPORAN_KINERJA_LAKIP"
  | "LAPORAN_KEUANGAN"
  | "ZONA_INTEGRITAS_RB";

export type ServiceType =
  | "PENGADUAN"
  | "SIM_KEPEGAWAIAN"
  | "SARPRAS"
  | "PERMOHONAN_NARASUMBER"
  | "INFORMASI_PUBLIK"
  | "FASILITASI_KOMPETENSI_PTK";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  coverImageUrl: string;
  captionImage?: string;
  status: PublishStatus;
  viewCount: number;
  publishedAt: string;
  author: {
    id: string;
    name: string;
  };
  category: Category;
  tags: string[];
}

export interface Announcement {
  id: string;
  title: string;
  slug: string;
  contentHtml: string;
  attachmentUrl?: string;
  attachmentName?: string;
  fileSize?: string;
  isPinned: boolean;
  status: PublishStatus;
  validUntil?: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImageUrl?: string;
  location: string;
  isOnline: boolean;
  startDate: string;
  endDate: string;
  organizer: string;
  speaker?: string;
  registrationUrl?: string;
  status: EventStatus;
}

export interface SurveyQuestion {
  id: string;
  code: string; // U1 s/d U9
  title: string;
  questionText: string;
  weight: number;
  scoreAvg?: number;
}

export interface SurveyPeriod {
  id: string;
  title: string;
  year: number;
  semester: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
}

export interface SurveyResponseItem {
  id: string;
  respondentName?: string;
  gender: "L" | "P";
  ageGroup: string;
  education: string;
  occupation: string;
  serviceReceived: ServiceType;
  suggestions?: string;
  scoreAvg: number;
  createdAt: string;
}

export interface ComplaintLog {
  id: string;
  status: ComplaintStatus;
  comment?: string;
  changedByName?: string;
  createdAt: string;
}

export interface ComplaintAttachment {
  id: string;
  fileName: string;
  fileUrl: string;
  fileSize: string;
  mimeType: string;
}

export interface Complaint {
  id: string;
  ticketNumber: string;
  type: ComplaintType;
  isAnonymous: boolean;
  reporterName: string;
  reporterEmail: string;
  reporterPhone: string;
  reporterAgency?: string;
  title: string;
  description: string;
  incidentDate?: string;
  incidentLocation?: string;
  reportedEntity?: string;
  status: ComplaintStatus;
  adminNotes?: string;
  officialReply?: string;
  attachments: ComplaintAttachment[];
  logs: ComplaintLog[];
  createdAt: string;
  updatedAt: string;
}

export interface ServiceStandardItem {
  id: string;
  type: ServiceType;
  slug: string;
  title: string;
  shortDesc: string;
  legalBasis: string[];
  requirements: string[];
  procedureSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  completionTime: string;
  fee: string;
  productOutput: string;
  complaintHandling: string;
  formTemplateUrl?: string;
  formTemplateName?: string;
}

export interface AccountabilityDocument {
  id: string;
  title: string;
  category: AccountabilityCategory;
  year: number;
  description?: string;
  fileUrl: string;
  fileName: string;
  fileSize: string;
  downloadCount: number;
  createdAt: string;
}

export interface OrganizationMember {
  id: string;
  name: string;
  nip?: string;
  position: string;
  division?: string;
  hierarchyLevel: 1 | 2 | 3; // 1: Kepala Balai, 2: Kasubbag TU, 3: Pokja
  sortOrder: number;
  imageUrl: string;
  bio?: string;
}

export interface AuditLog {
  id: string;
  userName: string;
  action: "CREATE" | "UPDATE" | "DELETE" | "LOGIN" | "EXPORT";
  entity: string;
  details: string;
  ipAddress: string;
  createdAt: string;
}
