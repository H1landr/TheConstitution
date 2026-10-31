/* ============================================================
   The Constitution, Explained
   Single source of truth for the table of contents.
   To add a page: write the file, then flip its `ready` flag to true.
   ============================================================ */

const PARTS = [
  {
    title: "Before the Document",
    items: [
      { f: "00-01-what-a-constitution-is.html", n: "0.1", t: "What a Constitution Is", ready: true },
      { f: "00-02-articles-of-confederation.html", n: "0.2", t: "The Articles of Confederation", ready: true },
      { f: "00-03-philadelphia-1787.html", n: "0.3", t: "Philadelphia, 1787", ready: true }
    ]
  },
  {
    title: "The Preamble",
    items: [
      { f: "01-01-preamble.html", n: "1.1", t: "“We the People”", ready: true }
    ]
  },
  {
    title: "The Seven Articles",
    items: [
      { f: "02-01-article-i-congress.html", n: "2.1", t: "Article I — Congress", ready: true },
      { f: "02-02-article-ii-president.html", n: "2.2", t: "Article II — The President", ready: true },
      { f: "02-03-article-iii-courts.html", n: "2.3", t: "Article III — The Courts", ready: true },
      { f: "02-04-article-iv-states.html", n: "2.4", t: "Article IV — The States", ready: true },
      { f: "02-05-article-v-amending.html", n: "2.5", t: "Article V — Amending", ready: true },
      { f: "02-06-article-vi-supremacy.html", n: "2.6", t: "Article VI — Supremacy", ready: true },
      { f: "02-07-article-vii-ratification.html", n: "2.7", t: "Article VII — Ratification", ready: true }
    ]
  },
  {
    title: "The Bill of Rights",
    items: [
      { f: "03-01-amendment-1.html", n: "3.1", t: "Amendment 1 — Five Freedoms", ready: true },
      { f: "03-02-amendment-2.html", n: "3.2", t: "Amendment 2 — Arms", ready: true },
      { f: "03-03-amendment-3.html", n: "3.3", t: "Amendment 3 — Quartering", ready: true },
      { f: "03-04-amendment-4.html", n: "3.4", t: "Amendment 4 — Searches", ready: true },
      { f: "03-05-amendment-5.html", n: "3.5", t: "Amendment 5 — Due Process", ready: true },
      { f: "03-06-amendment-6.html", n: "3.6", t: "Amendment 6 — Fair Trial", ready: true },
      { f: "03-07-amendment-7.html", n: "3.7", t: "Amendment 7 — Civil Juries", ready: true },
      { f: "03-08-amendment-8.html", n: "3.8", t: "Amendment 8 — Punishment", ready: true },
      { f: "03-09-amendment-9.html", n: "3.9", t: "Amendment 9 — Unlisted Rights", ready: true },
      { f: "03-10-amendment-10.html", n: "3.10", t: "Amendment 10 — Reserved Powers", ready: true },
      { f: "03-11-bill-of-rights-and-the-states.html", n: "3.11", t: "How It Reached the States", ready: true }
    ]
  },
  {
    title: "The Amendments Since 1791",
    items: [
      { f: "04-01-amendment-11.html", n: "4.1", t: "Amendment 11 — Suing a State", ready: true },
      { f: "04-02-amendment-12.html", n: "4.2", t: "Amendment 12 — Electing a President", ready: true },
      { f: "04-03-amendment-13.html", n: "4.3", t: "Amendment 13 — Slavery Abolished", ready: true },
      { f: "04-04-amendment-14.html", n: "4.4", t: "Amendment 14 — Citizenship and Equality", ready: true },
      { f: "04-05-amendment-15.html", n: "4.5", t: "Amendment 15 — Voting and Race", ready: true },
      { f: "04-06-amendment-16.html", n: "4.6", t: "Amendment 16 — The Income Tax", ready: true },
      { f: "04-07-amendment-17.html", n: "4.7", t: "Amendment 17 — Electing Senators", ready: true },
      { f: "04-08-amendment-18.html", n: "4.8", t: "Amendment 18 — Prohibition", ready: true },
      { f: "04-09-amendment-19.html", n: "4.9", t: "Amendment 19 — Women’s Suffrage", ready: true },
      { f: "04-10-amendment-20.html", n: "4.10", t: "Amendment 20 — Lame Ducks", ready: true },
      { f: "04-11-amendment-21.html", n: "4.11", t: "Amendment 21 — Repeal", ready: true },
      { f: "04-12-amendment-22.html", n: "4.12", t: "Amendment 22 — Two Terms", ready: true },
      { f: "04-13-amendment-23.html", n: "4.13", t: "Amendment 23 — Washington, D.C.", ready: true },
      { f: "04-14-amendment-24.html", n: "4.14", t: "Amendment 24 — Poll Taxes", ready: true },
      { f: "04-15-amendment-25.html", n: "4.15", t: "Amendment 25 — Succession", ready: true },
      { f: "04-16-amendment-26.html", n: "4.16", t: "Amendment 26 — Voting at 18", ready: true },
      { f: "04-17-amendment-27.html", n: "4.17", t: "Amendment 27 — Pay Raises", ready: true }
    ]
  },
  {
    title: "Putting It Together",
    items: [
      { f: "05-01-separation-of-powers.html", n: "5.1", t: "Separation of Powers, Traced", ready: true },
      { f: "05-02-federalism.html", n: "5.2", t: "Federalism: Who Does What", ready: true },
      { f: "05-03-how-the-document-changes.html", n: "5.3", t: "How the Document Changes", ready: true }
    ]
  },
  {
    title: "Back Matter",
    items: [
      { f: "zz-timeline.html", n: "A", t: "Timeline, 1781–1992", ready: true },
      { f: "zz-glossary.html", n: "B", t: "Glossary", ready: true },
      { f: "zz-full-text.html", n: "C", t: "The Full Text", ready: true },
      { f: "zz-sources.html", n: "D", t: "Sources", ready: true }
    ]
  }
];

/* ---------- helpers ---------- */

function currentFile() {
  const p = window.location.pathname.split("/").pop();
  return p && p.length ? p : "index.html";
}

function safeTitle(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------- sidebar table of contents ---------- */

function buildNav() {
  const nav = document.getElementById("toc");
  if (!nav) return;

  const here = currentFile();
  let html = '<a class="toc-home' + (here === "index.html" ? " active" : "") +
             '" href="index.html">Contents</a>';

  PARTS.forEach(function (part) {
    html += '<div class="toc-part"><h3>' + safeTitle(part.title) + "</h3><ul>";
    part.items.forEach(function (it) {
      if (it.ready) {
        const act = it.f === here ? ' class="active"' : "";
        html += '<li><a' + act + ' href="' + it.f + '">' +
                '<span class="num">' + it.n + "</span>" +
                "<span>" + safeTitle(it.t) + "</span></a></li>";
      } else {
        html += '<li class="pending"><span class="num">' + it.n + "</span>" +
                "<span>" + safeTitle(it.t) + "</span>" +
                '<span class="soon">soon</span></li>';
      }
    });
    html += "</ul></div>";
  });

  nav.innerHTML = html;
}

/* ---------- prev / next ---------- */

function buildPager() {
  const host = document.getElementById("pager");
  if (!host) return;

  const here = currentFile();
  const flat = [];
  PARTS.forEach(function (p) {
    p.items.forEach(function (i) { if (i.ready) flat.push(i); });
  });

  const idx = flat.findIndex(function (i) { return i.f === here; });
  if (idx === -1) { host.remove(); return; }

  const prev = flat[idx - 1];
  const next = flat[idx + 1];
  let html = "";

  if (prev) {
    html += '<a class="prev" href="' + prev.f + '">' +
            '<span class="dir">Previous</span>' + safeTitle(prev.t) + "</a>";
  }
  if (next) {
    html += '<a class="next" href="' + next.f + '">' +
            '<span class="dir">Next</span>' + safeTitle(next.t) + "</a>";
  }
  host.innerHTML = html;
}

/* ---------- index page contents ---------- */

function buildContents() {
  const host = document.getElementById("contents");
  if (!host) return;

  let html = "";
  PARTS.forEach(function (part) {
    html += '<section class="group"><h2>' + safeTitle(part.title) + '</h2><ol>';
    part.items.forEach(function (it) {
      if (it.ready) {
        html += '<li data-key="' + safeTitle((it.n + " " + it.t).toLowerCase()) + '">' +
                '<a href="' + it.f + '"><span class="num">' + it.n + "</span>" +
                "<span>" + safeTitle(it.t) + "</span></a></li>";
      } else {
        html += '<li class="pending" data-key="' + safeTitle((it.n + " " + it.t).toLowerCase()) + '">' +
                '<span class="num">' + it.n + "</span>" +
                "<span>" + safeTitle(it.t) + "</span></li>";
      }
    });
    html += "</ol></section>";
  });

  host.innerHTML = html;

  const box = document.getElementById("filter");
  if (!box) return;

  box.addEventListener("input", function () {
    const q = box.value.trim().toLowerCase();
    let shown = 0;

    host.querySelectorAll(".group").forEach(function (group) {
      let visibleInGroup = 0;
      group.querySelectorAll("li").forEach(function (li) {
        const hit = !q || li.dataset.key.indexOf(q) !== -1;
        li.style.display = hit ? "" : "none";
        if (hit) visibleInGroup++;
      });
      group.style.display = visibleInGroup ? "" : "none";
      shown += visibleInGroup;
    });

    let empty = host.querySelector(".empty");
    if (!shown) {
      if (!empty) {
        empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "Nothing matches that search yet.";
        host.appendChild(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  });
}

/* ---------- reading progress ---------- */

function wireProgress() {
  const bar = document.getElementById("progress");
  if (!bar) return;

  function update() {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/* ---------- mobile drawer ---------- */

function wireDrawer() {
  const btn = document.getElementById("navbtn");
  const scrim = document.getElementById("scrim");
  if (!btn) return;

  btn.addEventListener("click", function () {
    document.body.classList.toggle("nav-open");
  });
  if (scrim) {
    scrim.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.body.classList.remove("nav-open");
  });
}

/* ---------- init ---------- */

document.addEventListener("DOMContentLoaded", function () {
  buildNav();
  buildPager();
  buildContents();
  wireProgress();
  wireDrawer();
});
