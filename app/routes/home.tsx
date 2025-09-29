// app/routes/_index.tsx  (Remix / React)
import type { Route } from "./+types/home";
import { json } from "@remix-run/node";

/* =========================================================
   META
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title =
    "I Love Coloring Page | Free Printable Coloring Pages for Kids & Adults";
  const description =
    "Browse thousands of free printable coloring pages: animals, flowers, mandalas, dinosaurs, ocean life, holidays, fantasy creatures, cartoon characters, geometric patterns, and more. Download or print instantly without signup.";
  const url = "https://ilovecoloringpage.com/";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "free printable coloring pages, coloring sheets, kids coloring pages, adult mandala coloring, animals, flowers, fantasy, dinosaurs, seasonal coloring pages, ocean life, geometric patterns, stress relief coloring, black and white line art, PDF coloring downloads",
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#fce7f3" },
  ];
}

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "I Love Coloring Page",
        url: "https://ilovecoloringpage.com/",
        description:
          "Free printable coloring pages for kids and adults: animals, flowers, fantasy creatures, mandalas, dinosaurs, ocean life, holidays, geometric patterns, cartoon characters, and more. Download or print without signup.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Are all coloring pages free to print?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every coloring page is free to download or print at home with no signup required.",
            },
          },
          {
            "@type": "Question",
            name: "Can teachers use these in classrooms?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Teachers and parents can print as many pages as they need for personal, classroom, or nonprofit use.",
            },
          },
          {
            "@type": "Question",
            name: "What file formats and sizes are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All pages are offered as crisp black-and-white PNG and PDF files sized for standard US-Letter or A4 paper for easy home printing.",
            },
          },
          {
            "@type": "Question",
            name: "Are there pages suitable for adults?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We feature detailed mandalas, geometric patterns, and seasonal designs that adults love for stress-relief coloring.",
            },
          },
        ],
      },
    ],
  };

  const categories = [
    "Animals",
    "Flowers",
    "Dinosaurs",
    "Butterflies",
    "Birds",
    "Insects",
    "Fantasy & Dragons",
    "Mythical Creatures",
    "Ocean Life",
    "Sea Shells & Coral",
    "Mandalas & Geometric Patterns",
    "Optical-Illusion Patterns",
    "Holidays & Seasons",
    "Christmas & Winter",
    "Halloween & Autumn",
    "Spring & Summer Scenes",
    "Cartoon Characters",
    "Cute Chibi Characters",
    "Space & Planets",
    "Vehicles & Transportation",
    "Buildings & Landmarks",
    "Fruits & Vegetables",
    "Food & Desserts",
    "Alphabet & Numbers",
    "Farm Scenes",
    "Forest & Wildlife",
    "Underwater Fantasy",
    "Fairy-Tale Castles",
    "Mermaids & Unicorns",
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
          I&nbsp;Love&nbsp;Coloring&nbsp;Page
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Discover thousands of <strong>free printable coloring pages</strong>{" "}
          for kids, teens, and adults. Choose from animals, flowers, fantasy
          creatures, dinosaurs, ocean life, geometric mandalas, seasonal
          holidays, cartoon characters, and more. Every page is clean
          black-and-white line art ready to <strong>download or print</strong>{" "}
          instantly for classrooms, craft time, or stress-relief coloring.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Updated {new Date(nowISO).toLocaleDateString()}
        </p>
      </header>

      {/* CATEGORY GRID */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          Featured Coloring Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="block rounded-lg border border-pink-200 bg-white shadow hover:shadow-lg hover:border-pink-400 transition text-center p-4 text-pink-700 font-medium"
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* SEO-RICH LANDING CONTENT */}
      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Free Printable Coloring Pages for All Ages
        </h2>
        <p>
          <strong>I Love Coloring Page</strong> was built for families,
          teachers, hobbyists, and anyone who loves to relax with crayons,
          pencils, or markers. All designs use{" "}
          <strong>bold, crisp outlines</strong> with no shading so your colors
          pop on the page. The library covers everything from{" "}
          <em>easy toddler animals</em> to <em>detailed adult mandalas</em> and{" "}
          <em>holiday scenes</em>.
        </p>
        <p>
          Each image downloads in high-resolution PNG or PDF sized to 8.5 ×
          11-inch US-Letter or A4 paper for{" "}
          <strong>ink-friendly home printing</strong>. Seasonal collections keep
          the library fresh - think pumpkins for autumn, snowflakes for winter,
          spring blossoms, summer beach scenes, and holiday specials for
          Christmas, Easter, or Halloween.
        </p>
        <p>
          Teachers often use our <strong>Alphabet</strong> and{" "}
          <strong>Number-Tracing</strong> sets in preschool or ESL classrooms,
          while hobbyists enjoy <strong>Mandalas</strong>,{" "}
          <strong>Optical-Illusion Patterns</strong>, and{" "}
          <strong>Fantasy Creatures</strong> for mindful coloring therapy.
        </p>

        <h3 className="text-2xl font-semibold text-pink-600">
          Why Choose I Love Coloring Page
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>All categories in one easy-to-browse site</li>
          <li>Instant download - no pop-ups, no signup</li>
          <li>Free for personal and classroom use</li>
          <li>Kid-friendly outlines plus adult-level mandalas</li>
          <li>Printer-ready black-and-white PNG & PDF files</li>
          <li>Optimized for phones, tablets, and desktops</li>
          <li>Updated often with new seasonal collections</li>
        </ul>

        <h3 className="text-2xl font-semibold text-pink-600">Popular Uses</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-pink-200 bg-pink-50/30 p-4">
            <h4 className="font-bold text-pink-700">Classroom & Homeschool</h4>
            <p className="text-sm">
              Teachers print alphabet letters, animals, holiday scenes, and math
              activity sheets for group lessons or rainy-day crafts.
            </p>
          </div>
          <div className="rounded-lg border border-pink-200 bg-pink-50/30 p-4">
            <h4 className="font-bold text-pink-700">Family Craft Time</h4>
            <p className="text-sm">
              Parents keep kids busy on weekends with cute chibi characters,
              forest wildlife, and ocean-life scenes to color together.
            </p>
          </div>
          <div className="rounded-lg border border-pink-200 bg-pink-50/30 p-4">
            <h4 className="font-bold text-pink-700">
              Stress-Relief for Adults
            </h4>
            <p className="text-sm">
              Detailed mandalas, geometric and optical-illusion patterns provide
              a calming, creative break from screens.
            </p>
          </div>
          <div className="rounded-lg border border-pink-200 bg-pink-50/30 p-4">
            <h4 className="font-bold text-pink-700">Holiday Events</h4>
            <p className="text-sm">
              Print seasonal packs - pumpkins, snowmen, Easter eggs, fireworks -
              for party activities or church/community events.
            </p>
          </div>
        </div>

        <p>
          Bookmark this site and come back often to discover new designs.
          <strong> I Love Coloring Page</strong> is here to make coloring
          <strong> free, fun, and accessible</strong> for everyone.
        </p>
      </section>

      {/* EXTRA SEO SECTIONS */}
      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          How to Get the Best Prints at Home
        </h2>
        <p>
          You can print every coloring sheet right from your home printer. For
          crisp lines and vivid colors we recommend selecting
          <strong> “Best” print quality</strong> in your printer settings and
          using <strong>bright-white 20-24 lb paper</strong>. If you plan to
          color with markers, place a scrap sheet underneath to prevent
          bleed-through. Teachers often print multiple copies at once and keep
          them in binders sorted by theme for quick classroom activities.
        </p>
        <p>
          Each PDF is <strong>ink-friendly black-and-white line art</strong>
          with bold outlines that remain sharp even on economical print
          settings. The PNG files can be dropped into slide decks, worksheets,
          or digital whiteboards for hybrid classrooms.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Seasonal & Themed Collections
        </h2>
        <p>
          Our library grows throughout the year with
          <strong> seasonal bundles</strong> to keep coloring fresh and fun:
          snowflakes, reindeer, and ornaments for <em>Christmas & Winter</em>;
          pumpkins, bats, and haunted houses for <em>Halloween</em>; eggs,
          bunnies, and spring flowers for <em>Easter</em>; plus beach scenes,
          fireworks, and ice-cream cones for <em>Summer & 4th of July</em>.
        </p>
        <p>
          We also feature <strong>special-event packs</strong> such as
          back-to-school supplies, Valentine hearts, Earth-Day plants, and
          cultural celebrations like Diwali lamps or Lunar-New-Year dragons.
          These themed sets are perfect for party hand-outs, bulletin-board
          displays, or weekend craft stations at libraries and community
          centers.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Benefits of Coloring for Kids & Adults
        </h2>
        <p>
          Coloring is more than a pastime - studies show it
          <strong>
            {" "}
            improves focus, fine-motor skills, color recognition, and creative
            expression
          </strong>{" "}
          in children. Teachers often use themed coloring sheets to reinforce
          vocabulary and seasonal topics.
        </p>
        <p>
          For teens and adults, <strong>mindful coloring</strong> of mandalas or
          geometric patterns can help lower stress, reduce screen fatigue, and
          provide a creative outlet. Many families color together as a calming
          weekend tradition.
        </p>
        <p>
          By offering <strong>thousands of free pages</strong> across dozens of
          themes, I Love Coloring Page makes it simple to enjoy these benefits
          anytime without subscriptions or logins.
        </p>
      </section>

      {/* ADDITIONAL LONG-FORM SECTIONS */}

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          A Short History of Coloring Pages
        </h2>
        <p>
          Coloring books began appearing in the late 1800s as an educational
          tool for teaching art and nature study. With the rise of
          <strong> home printers and digital downloads</strong>, coloring pages
          have become one of the most accessible art activities worldwide.
          Today, online libraries like <strong>I Love Coloring Page</strong>
          offer an ever-growing selection that spans{" "}
          <em>classic storybook illustrations</em>,{" "}
          <em>modern cartoon characters</em>, and
          <em>intricate mandalas</em> designed especially for adults.
        </p>
        <p>
          Our goal is to preserve the <strong>joy and simplicity</strong> of
          paper-and-pencil coloring while making it
          <strong> free and printable anywhere</strong> - at school, in
          libraries, or at home with friends and family.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Teacher Tips for Classroom Use
        </h2>
        <p>
          Teachers often keep a binder of{" "}
          <strong>seasonal and subject-based coloring sheets</strong> for quick
          activities during rainy-day recess, early-finish work periods, or art
          centers. Popular classroom sets include{" "}
          <em>
            alphabet letters, number tracing, shapes, animals, holiday scenes
          </em>
          , and <em>community-helper illustrations</em>.
        </p>
        <p>
          For group projects, print pages on
          <strong> heavier card-stock</strong> so students can use markers,
          glue, glitter, or watercolors without bleed-through. Our
          <strong> simple black-and-white outlines</strong> save ink and let
          children focus on creativity.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Community & Sharing Ideas
        </h2>
        <p>
          Families, libraries, and community centers use our
          <strong> printable coloring sheets</strong> for
          <em> birthday-party crafts</em>, <em>grand-opening events</em>,
          <em>senior-center art therapy</em>, and
          <em>library summer-reading programs</em>.
        </p>
        <p>
          Many visitors create <strong>scrap-books or wall collages</strong>
          using finished pages, or scan colored designs to share in
          <em>school newsletters</em> and <em>community bulletin boards</em>.
          The simplicity of a black-and-white PDF means you can re-size, project
          on whiteboards, or trace for window-art decorations.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Eco-Friendly & Safe Printing Tips
        </h2>
        <p>
          We care about sustainability. Use the
          <strong> “draft” or “eco” print mode</strong> when you only need a
          light outline for crayons - it cuts ink use by 30-50 %. Re-use the
          back of old office paper for practice pages, and
          <strong> recycle printed sheets</strong> after use.
        </p>
        <p>
          All our pages are designed with
          <strong> non-toxic coloring materials in mind</strong>. Parents should
          supervise very young children when using scissors or glitter glue
          during craft activities.
        </p>
      </section>

      {/* EVEN MORE LONG-FORM SECTIONS */}

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Exploring Different Coloring Styles
        </h2>
        <p>
          Coloring is not just about filling spaces with a single color. Try
          <strong> blending two or three shades</strong> of the same color for
          depth, use <strong>hatching or stippling</strong> to create texture,
          or experiment with <strong>ombre gradients</strong> for skies and
          oceans. Our <em>Mandala</em> and <em>Geometric Pattern</em> sections
          are perfect for testing new coloring techniques.
        </p>
        <p>
          Kids enjoy bold solid colors, while teens often explore
          <strong> shading and cross-hatching</strong> with colored pencils.
          These artistic choices help improve
          <strong> fine-motor control and spatial awareness</strong>.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Choosing the Right Materials
        </h2>
        <p>
          For toddlers we recommend <strong>large washable crayons</strong> or
          <strong> chunky colored pencils</strong> to avoid messy stains. Older
          children and adults may prefer
          <strong> fine-tip colored pencils</strong> or
          <strong> alcohol-based markers</strong> for smoother gradients.
        </p>
        <p>
          Print on <strong>heavier 24-28 lb paper</strong> if using markers to
          prevent bleed-through. Add
          <strong> glitter pens, gel pens, metallic markers</strong> or
          <strong> watercolor pencils</strong> to create special effects for
          holiday cards and handmade gifts.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Try Digital Coloring Too
        </h2>
        <p>
          Each PNG download is
          <strong> high-resolution, tablet-friendly</strong> for anyone who
          wants to color digitally in apps like Procreate, Sketchbook, or
          Photoshop. This makes it easy to experiment with unlimited palettes
          without wasting paper. Digital coloring is popular with teens who
          share their creations on social media or in classroom slideshows.
        </p>
        <p>
          Many families now enjoy
          <strong> hybrid craft nights</strong>: kids use crayons on printed
          pages while adults add advanced shading on tablets using the same
          design.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Therapeutic & Educational Benefits
        </h2>
        <p>
          Studies show that <strong>mindful coloring</strong> can reduce stress
          levels, encourage <strong>self-expression</strong>, and even slow
          heart-rate during focused sessions. Occupational therapists often use
          <em> geometric mandalas</em> and
          <em> nature-scene outlines</em> to help patients regain
          <strong> hand-eye coordination</strong>.
        </p>
        <p>
          Coloring pages also reinforce
          <strong>
            {" "}
            pattern recognition, letter learning, seasonal vocabulary, and
            cultural awareness
          </strong>{" "}
          when themed around holidays or world landmarks — making it both
          educational and relaxing.
        </p>
      </section>

      <section className="mb-20 space-y-6 leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold text-pink-600">
          Showcase Your Finished Gallery
        </h2>
        <p>
          We encourage families, classrooms, and community groups to create a
          <strong> wall-mounted gallery</strong> or a
          <strong> digital slideshow</strong> of completed coloring sheets.
          Displaying student art boosts confidence and brightens
          <strong> bulletin boards, libraries, and bedrooms</strong>.
        </p>
        <p>
          Some teachers organize
          <strong> monthly coloring challenges</strong> where kids vote for
          their favorite seasonal design. Parents often frame a child’s best
          artwork as a keepsake or gift for relatives.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-pink-200 rounded-2xl border border-pink-200 bg-white shadow-sm">
          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-pink-800">
              Are all coloring pages free to print?
            </summary>
            <div className="px-5 pb-4 text-gray-700">
              Yes. Every page is free to download or print at home without any
              signup or payment.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-pink-800">
              Can teachers use these in classrooms?
            </summary>
            <div className="px-5 pb-4 text-gray-700">
              Absolutely. Teachers and parents can print as many pages as needed
              for personal, classroom, or nonprofit use.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-pink-800">
              What file formats and sizes are available?
            </summary>
            <div className="px-5 pb-4 text-gray-700">
              All pages are provided as black-and-white PNG and PDF files sized
              for US-Letter (8.5×11 in) or A4 paper, perfect for home printers.
            </div>
          </details>

          <details>
            <summary className="cursor-pointer px-5 py-4 font-medium text-pink-800">
              Are there designs for adults?
            </summary>
            <div className="px-5 pb-4 text-gray-700">
              Yes. We offer detailed mandalas, geometric patterns, and seasonal
              art suitable for older teens and adults who enjoy stress-relief
              coloring.
            </div>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-pink-200 bg-pink-50/60 text-sm text-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between gap-3">
          <div>© {new Date().getFullYear()} I Love Coloring Page</div>
          <div>
            Free printable coloring sheets for kids, adults, classrooms,
            holidays, and more.
          </div>
        </div>
      </footer>
    </main>
  );
}
