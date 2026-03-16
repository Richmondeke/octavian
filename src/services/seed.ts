import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, limit } from "firebase/firestore";

const mockJobs = [
  { role: "Senior Frontend Developer", department: "Engineering", location: "Remote", candidates: 42, interviews: 8, status: "Active", aiScore: "94%", posted: "2 days ago" },
  { role: "Product Designer", department: "Design", location: "New York", candidates: 18, interviews: 3, status: "Active", aiScore: "88%", posted: "5 days ago" },
  { role: "Backend Engineer", department: "Engineering", location: "Austin, TX", candidates: 64, interviews: 12, status: "On Hold", aiScore: "91%", posted: "1 week ago" },
  { role: "Marketing Manager", department: "Growth", location: "Remote", candidates: 25, interviews: 0, status: "Active", aiScore: "76%", posted: "3 days ago" },
];

const mockCandidates = [
  { name: "Alex Dom Bringer", role: "Senior Graphic Illustrator", experience: "8 years", location: "Stockholm, Sweden", status: "Shortlisted", aiScore: 94.2, tags: ["Illustrator", "Branding", "UI Design"] },
  { name: "Jeremy Miller Voke", role: "Frontend Developer", experience: "5 years", location: "Berlin, Germany", status: "Interviewing", aiScore: 88.9, tags: ["React", "Next.js", "Tailwind"] },
  { name: "Launa Fernandez", role: "UX/UI Designer", experience: "6 years", location: "Madrid, Spain", status: "New Applied", aiScore: 71.5, tags: ["Figma", "Research", "Accessibility"] },
];

export async function seedDatabase() {
  try {
    // Check if jobs collection is empty
    const jobsSnapshot = await getDocs(query(collection(db, "jobs"), limit(1)));
    if (jobsSnapshot.empty) {
      console.log("Seeding jobs...");
      for (const job of mockJobs) {
        await addDoc(collection(db, "jobs"), job);
      }
    }

    // Check if candidates collection is empty
    const candidatesSnapshot = await getDocs(query(collection(db, "candidates"), limit(1)));
    if (candidatesSnapshot.empty) {
      console.log("Seeding candidates...");
      for (const candidate of mockCandidates) {
        await addDoc(collection(db, "candidates"), candidate);
      }
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
