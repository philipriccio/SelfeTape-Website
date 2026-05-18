export type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryCta: string;
  problemTitle: string;
  problemBody: string[];
  solutionTitle: string;
  solutionBullets: string[];
  comparisonTitle: string;
  comparisons: { label: string; drawback: string; selfeTape: string }[];
  faq: { question: string; answer: string }[];
  related: string[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "self-tape-app",
    title: "Self-Tape App",
    metaTitle: "Self-Tape App for Actors — Record Auditions on iPhone",
    description:
      "Self-e-Tape is the self-tape app for actors who need to import sides, rehearse with reader voices, record, clean up audio, add a slate/title card, and export from one iPhone workflow.",
    heroEyebrow: "Self-tape app for actors",
    heroTitle: "Record the audition, not the tech circus.",
    heroSubtitle:
      "Self-e-Tape brings the self-tape workflow into one iPhone app: PDF sides, reader voices, rehearsal, recording, audio cleanup, slate, title card, review, and export.",
    primaryCta: "Get early access + the Self-Tape Emergency Kit",
    problemTitle: "Most self-tape tools solve one piece and leave you juggling the rest.",
    problemBody: [
      "Actors usually end up bouncing between a PDF viewer, voice memo, camera app, editor, title-card tool, and cloud upload — often while the tape is due tomorrow.",
      "That fragmentation costs time and confidence. It also creates avoidable mistakes: bad reader timing, messy audio, missing slates, wrong exports, and too many almost-final files."
    ],
    solutionTitle: "Self-e-Tape is built around the actual audition workflow.",
    solutionBullets: [
      "Import PDF sides and identify roles without rebuilding the script by hand.",
      "Assign natural reader voices so you can rehearse and record when no human reader is available.",
      "Record takes, review quickly, and keep the best version without losing momentum.",
      "Clean up sound, add slate/title card, assemble the final tape, and export from one place."
    ],
    comparisonTitle: "How it compares to the usual workaround",
    comparisons: [
      {
        label: "Camera app + iMovie",
        drawback: "Flexible, but slow and easy to mess up under deadline pressure.",
        selfeTape: "Keeps import, recording, assembly, title card, cleanup, and export in one audition flow."
      },
      {
        label: "Reader-only apps",
        drawback: "Useful for timing, but they often stop before editing, slate, title card, and final export.",
        selfeTape: "Handles the reader problem and the submission package."
      },
      {
        label: "Self-tape studios",
        drawback: "Great when available, but not always practical at midnight or on a same-day deadline.",
        selfeTape: "Gives actors a reliable home workflow when time, money, or geography gets in the way."
      }
    ],
    faq: [
      {
        question: "What is a self-tape app?",
        answer:
          "A self-tape app helps actors record audition tapes outside a casting room. Self-e-Tape is designed to cover the full process: sides, reader voices, recording, polish, slate/title card, and export."
      },
      {
        question: "Is Self-e-Tape only a reader app?",
        answer:
          "No. Reader voices are one part of the product, but the larger promise is the full audition workflow from import to submission-ready export."
      },
      {
        question: "Can I use it when I already have a reader?",
        answer:
          "Yes. A human reader is still ideal when available. Self-e-Tape is for the times when you need a reliable backup or want the rest of the workflow handled in one place."
      }
    ],
    related: ["self-tape-without-a-reader", "self-tape-reader-app", "audition-recording-app"]
  },
  {
    slug: "self-tape-without-a-reader",
    title: "Self-Tape Without a Reader",
    metaTitle: "How to Record a Self-Tape Without a Reader",
    description:
      "Need to record a self-tape without a reader? Self-e-Tape gives actors reader voices, cue-friendly rehearsal, recording, cleanup, and export in one workflow.",
    heroEyebrow: "No reader? No panic.",
    heroTitle: "Record a self-tape when no one can read with you.",
    heroSubtitle:
      "When your reader cancels, your partner is asleep, or the audition lands at 10 PM, Self-e-Tape gives you a reader workflow and final export path without begging for a favour.",
    primaryCta: "Join the actor beta list",
    problemTitle: "The no-reader workaround is usually clunky.",
    problemBody: [
      "Actors record the other lines in Voice Memos, play them off a laptop, guess the pauses, then fight the timing for every take.",
      "It can work, but it pulls attention away from the scene and into the machinery of making the tape."
    ],
    solutionTitle: "Self-e-Tape keeps you in the audition.",
    solutionBullets: [
      "Import the sides and choose which role is yours.",
      "Assign reader voices to the other characters.",
      "Rehearse until the timing feels playable.",
      "Record and export without switching apps."
    ],
    comparisonTitle: "Manual no-reader methods vs Self-e-Tape",
    comparisons: [
      {
        label: "Pre-recording all reader lines",
        drawback: "Takes setup time and locks you into one rhythm.",
        selfeTape: "Makes reader playback part of the app workflow so you can focus on performance."
      },
      {
        label: "Reading both sides yourself",
        drawback: "Breaks concentration and usually looks/sounds like a compromise.",
        selfeTape: "Separates your performance from the reader track."
      },
      {
        label: "Calling in favours",
        drawback: "Works until everyone is busy, tired, or unavailable.",
        selfeTape: "Always there when the deadline is not negotiable."
      }
    ],
    faq: [
      {
        question: "Can you self-tape without a reader?",
        answer:
          "Yes, but the usual workarounds are awkward. Self-e-Tape is being built for actors who need a practical reader alternative when a real person is not available."
      },
      {
        question: "Will casting know I used an app?",
        answer:
          "The goal is for the app to disappear: clean framing, natural reader timing, better audio, and a professional final file where the focus stays on the actor."
      },
      {
        question: "Is a real reader still better?",
        answer:
          "Often, yes. Self-e-Tape is not pretending otherwise. It is for the real-world moments when a real reader is not available."
      }
    ],
    related: ["self-tape-reader-app", "self-tape-app", "last-minute-self-tape-checklist"]
  },
  {
    slug: "self-tape-reader-app",
    title: "Self-Tape Reader App",
    metaTitle: "Self-Tape Reader App for Actors — Natural Reader Voices",
    description:
      "A self-tape reader app for actors who need natural reader voices, script import, rehearsal, recording, and export in one audition workflow.",
    heroEyebrow: "Reader app, plus the rest of the tape",
    heroTitle: "A reader who is available when the audition is due.",
    heroSubtitle:
      "Self-e-Tape gives actors reader voices for rehearsal and recording, then carries the tape through cleanup, slate, title card, review, and export.",
    primaryCta: "Get early access",
    problemTitle: "Reader timing is only half the problem.",
    problemBody: [
      "A reader app can help you get through the scene, but most auditions still need trimming, sound cleanup, title card, slate, final review, and a clean export.",
      "If the reader tool stops at playback, you are still stuck assembling the final tape somewhere else."
    ],
    solutionTitle: "Self-e-Tape treats reader playback as one step in the full submission path.",
    solutionBullets: [
      "Assign voices to characters from imported sides.",
      "Use the app as your always-available reader for rehearsal and recording.",
      "Review takes without losing the context of the audition.",
      "Move directly into post-take polish and export."
    ],
    comparisonTitle: "What actors should look for in a reader app",
    comparisons: [
      {
        label: "Voice quality",
        drawback: "Robotic or mismatched voices make the tape feel artificial.",
        selfeTape: "Prioritizes natural reader voices that support the actor instead of drawing attention."
      },
      {
        label: "Workflow fit",
        drawback: "A reader-only workflow still requires other tools to finish the tape.",
        selfeTape: "Connects reader, camera, cleanup, slate/title card, and export."
      },
      {
        label: "Deadline reliability",
        drawback: "Manual setup gets stressful when the tape is due fast.",
        selfeTape: "Built around the last-minute self-tape reality."
      }
    ],
    faq: [
      {
        question: "What does a self-tape reader app do?",
        answer:
          "It provides the other characters' lines while an actor performs to camera. Self-e-Tape adds the rest of the audition workflow around that reader function."
      },
      {
        question: "Does Self-e-Tape replace acting partners?",
        answer:
          "No. It is a practical backup for the many auditions where an acting partner is not available on the deadline."
      },
      {
        question: "Can I rehearse before recording?",
        answer:
          "Yes. Rehearsal is central to the workflow so actors can get comfortable before turning on the camera."
      }
    ],
    related: ["self-tape-without-a-reader", "audition-recording-app", "best-self-tape-app"]
  },
  {
    slug: "best-self-tape-app",
    title: "Best Self-Tape App",
    metaTitle: "Best Self-Tape App for Actors — What to Look For",
    description:
      "Looking for the best self-tape app? Compare reader apps, camera workflows, editing tools, audio cleanup, slate/title card support, and export needs.",
    heroEyebrow: "Buyer's guide",
    heroTitle: "The best self-tape app is the one that finishes the tape.",
    heroSubtitle:
      "Actors do not just need a recorder. They need a workflow that survives real audition deadlines: import, reader, recording, review, audio, slate, title card, and export.",
    primaryCta: "Join the early access list",
    problemTitle: "Most app comparisons focus on features, not the actual deadline.",
    problemBody: [
      "A self-tape app can look good in a feature list and still leave actors with three more steps before they have something they can send to casting.",
      "The best choice depends on whether you need a reader, full recording workflow, final assembly, audio cleanup, or all of it."
    ],
    solutionTitle: "Use this checklist when comparing self-tape apps.",
    solutionBullets: [
      "Can it import real PDF sides without manual retyping?",
      "Can it help when no reader is available?",
      "Can it record, review, trim, and assemble takes?",
      "Can it improve sound without making the tape feel fake?",
      "Can it produce the final file casting actually needs?"
    ],
    comparisonTitle: "Common self-tape app categories",
    comparisons: [
      {
        label: "Reader/rehearsal apps",
        drawback: "Strong for line practice; often limited for final submission assembly.",
        selfeTape: "Designed to include reader support inside the final-tape workflow."
      },
      {
        label: "Video editors",
        drawback: "Good for post-production; weak for script import and reader timing.",
        selfeTape: "Starts at the audition sides and carries through export."
      },
      {
        label: "Studio bookings",
        drawback: "Professional but expensive and unavailable at odd hours.",
        selfeTape: "A home workflow for urgent, frequent, or solo taping."
      }
    ],
    faq: [
      {
        question: "What is the best self-tape app for actors?",
        answer:
          "The best app depends on the audition workflow. For actors who need reader support plus final assembly and export, Self-e-Tape is being built as an all-in-one option."
      },
      {
        question: "Should actors use a dedicated self-tape app or the camera app?",
        answer:
          "The camera app can work, but dedicated self-tape workflows reduce the number of manual steps under deadline pressure."
      },
      {
        question: "What features matter most?",
        answer:
          "Reliable import, reader support, clean audio, slate/title card, take review, and final export matter more than novelty features."
      }
    ],
    related: ["self-tape-app", "self-tape-reader-app", "self-tape-audio-cleanup"]
  },
  {
    slug: "self-tape-audio-cleanup",
    title: "Self-Tape Audio Cleanup",
    metaTitle: "Self-Tape Audio Cleanup for Actors — Cleaner Audition Sound",
    description:
      "Self-tape audio matters. Learn what causes noisy audition tapes and how Self-e-Tape is being built to help actors clean up sound without leaving the workflow.",
    heroEyebrow: "Cleaner audition sound",
    heroTitle: "Bad self-tape audio makes good acting harder to see.",
    heroSubtitle:
      "Room noise, inconsistent levels, harsh reader playback, and awkward edits can distract from the performance. Self-e-Tape is being built to make audio cleanup part of the audition workflow.",
    primaryCta: "Get the Self-Tape Emergency Kit",
    problemTitle: "Actors are judged on performance, but bad sound still costs them.",
    problemBody: [
      "Casting does not need studio perfection, but they do need to hear the actor clearly without fighting room noise, jumps in volume, or distracting playback artifacts.",
      "Most actors do not have time to learn audio post-production while an audition clock is running."
    ],
    solutionTitle: "Self-e-Tape keeps audio polish practical.",
    solutionBullets: [
      "Help actor dialogue stay clear and consistent.",
      "Reduce distracting background texture where possible.",
      "Balance reader and actor so the scene still feels natural.",
      "Keep cleanup inside the same flow as recording and export."
    ],
    comparisonTitle: "Audio fixes actors usually try",
    comparisons: [
      {
        label: "External editing apps",
        drawback: "Powerful, but slow and intimidating for everyday auditions.",
        selfeTape: "Makes cleanup a built-in audition step instead of a separate engineering task."
      },
      {
        label: "Buying more gear",
        drawback: "Helpful, but not always realistic and does not solve every room problem.",
        selfeTape: "Improves the workflow actors already have on their phone."
      },
      {
        label: "Ignoring the problem",
        drawback: "Noise and uneven levels can pull attention away from the scene.",
        selfeTape: "Treats sound as part of the professional submission package."
      }
    ],
    faq: [
      {
        question: "Does self-tape audio need to be perfect?",
        answer:
          "No. It needs to be clear, consistent, and not distracting. Casting should be watching the actor, not noticing the room."
      },
      {
        question: "Can an app fix every bad room?",
        answer:
          "No app can turn a terrible recording into a perfect studio take. The goal is practical improvement and fewer avoidable problems."
      },
      {
        question: "Why does reader audio matter?",
        answer:
          "If reader playback sounds artificial, too loud, or disconnected from the actor, it can make the tape feel less natural."
      }
    ],
    related: ["self-tape-app", "audition-recording-app", "last-minute-self-tape-checklist"]
  },
  {
    slug: "audition-recording-app",
    title: "Audition Recording App",
    metaTitle: "Audition Recording App for Actors — Record and Submit Self-Tapes",
    description:
      "An audition recording app for actors who need to record self-tapes, rehearse with a reader, polish sound, add slate/title card, and export.",
    heroEyebrow: "Audition recording workflow",
    heroTitle: "Record auditions on your phone without rebuilding the process every time.",
    heroSubtitle:
      "Self-e-Tape is for actors who need a repeatable audition recording workflow: sides in, reader ready, takes recorded, sound cleaned, final tape exported.",
    primaryCta: "Get early access",
    problemTitle: "Audition recording is not just hitting the red button.",
    problemBody: [
      "A professional self-tape needs framing, reader timing, usable audio, clear file assembly, and a final export that does not create panic at the last minute.",
      "When those steps are scattered across different apps, mistakes creep in."
    ],
    solutionTitle: "Self-e-Tape turns audition recording into a repeatable checklist.",
    solutionBullets: [
      "Start from the sides and chosen role.",
      "Rehearse and record with reader support.",
      "Keep the best takes and move into final assembly.",
      "Export a clean submission file from the same workflow."
    ],
    comparisonTitle: "Why a purpose-built audition recorder helps",
    comparisons: [
      {
        label: "Generic video camera",
        drawback: "Records video, but does not understand audition requirements.",
        selfeTape: "Built around self-tape needs like reader, slate, title card, and export."
      },
      {
        label: "Desktop editing workflow",
        drawback: "Can produce great results, but slows down urgent tapes.",
        selfeTape: "Keeps the workflow mobile and audition-specific."
      },
      {
        label: "All-manual checklist",
        drawback: "Depends on remembering every step under pressure.",
        selfeTape: "Bakes the steps into the product flow."
      }
    ],
    faq: [
      {
        question: "What should an audition recording app include?",
        answer:
          "For self-tapes, the important pieces are sides import, reader support, recording, review, audio cleanup, slate/title card, and export."
      },
      {
        question: "Can I record multiple takes?",
        answer:
          "Yes. Self-e-Tape is designed around recording, reviewing, and choosing the best take rather than forcing one perfect pass."
      },
      {
        question: "Is this for theatre, film, TV, or commercials?",
        answer:
          "The workflow is aimed at actors submitting self-tapes across film, TV, theatre, commercial, and other audition contexts."
      }
    ],
    related: ["self-tape-app", "self-tape-without-a-reader", "best-self-tape-app"]
  },
  {
    slug: "last-minute-self-tape-checklist",
    title: "Last-Minute Self-Tape Checklist",
    metaTitle: "Last-Minute Self-Tape Checklist for Actors",
    description:
      "A practical last-minute self-tape checklist for actors: lighting, framing, sound, reader options, slate, title card, export, and final review.",
    heroEyebrow: "Free actor resource",
    heroTitle: "The last-minute self-tape checklist actors actually need.",
    heroSubtitle:
      "When the audition is due tomorrow, you do not need a 40-minute gear lecture. You need the steps that keep the tape clean, clear, and sendable.",
    primaryCta: "Send me the checklist + early access",
    problemTitle: "Most self-tape mistakes happen in the rush.",
    problemBody: [
      "The acting may be ready, but the frame is too low, the reader is too loud, the slate is missing, the file name is confusing, or the export is wrong.",
      "A simple checklist catches the boring mistakes before they distract from the work."
    ],
    solutionTitle: "Use this before every urgent tape.",
    solutionBullets: [
      "Frame: eye line close to camera, clean background, no distracting clutter.",
      "Light: face visible, no harsh overhead shadows, no bright window behind you.",
      "Sound: reader lower than actor, HVAC/noise checked, phone stable.",
      "Performance: take limit set before the spiral begins.",
      "Submission: slate/title card included if required, final file reviewed, upload link tested."
    ],
    comparisonTitle: "Checklist priorities",
    comparisons: [
      {
        label: "Must fix",
        drawback: "Bad sound, unusable framing, missing required slate, wrong file.",
        selfeTape: "These are the errors that can make a good audition hard to watch."
      },
      {
        label: "Worth improving",
        drawback: "Cleaner background, steadier light, faster setup, better reader workflow.",
        selfeTape: "These improve the tape without hijacking the acting."
      },
      {
        label: "Do not overthink",
        drawback: "Tiny wardrobe tweaks, endless takes, over-polishing after the performance is already alive.",
        selfeTape: "The point is to submit strong work, not disappear into perfectionism."
      }
    ],
    faq: [
      {
        question: "What is the most important self-tape checklist item?",
        answer:
          "Clear acting, clear sound, and clear framing. If casting can see and hear the work without distraction, you are most of the way there."
      },
      {
        question: "How many takes should I do?",
        answer:
          "Usually fewer than you think. Set a limit before you start so the session does not become a perfection spiral."
      },
      {
        question: "Should I sign up before the app launches?",
        answer:
          "Yes if you want early access, founder pricing updates, and practical self-tape resources before launch."
      }
    ],
    related: ["self-tape-without-a-reader", "self-tape-audio-cleanup", "audition-recording-app"]
  }
];

export function getSeoPage(slug: string) {
  return seoPages.find((page) => page.slug === slug) ?? null;
}

export function getSeoPageSlugs() {
  return seoPages.map((page) => page.slug);
}
