import { useEffect, useState, useCallback } from "react";

// Change this if your backend runs on a different port/host
const API_BASE_URL = "http://localhost:5000";

const statusOptions = ["Pending", "Under Review", "Shortlisted", "Rejected"];

const statusColors = {
  Pending: "bg-ink/10 text-ink/70",
  "Under Review": "bg-gold/20 text-forest",
  Shortlisted: "bg-forest/15 text-forest",
  Rejected: "bg-red-100 text-red-700",
};

const thClass =
  "px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-parchment/80";
const tdClass = "px-4 py-3 text-sm text-ink align-top";

export default function AdminPanel() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  const [filters, setFilters] = useState({ force: "", status: "" });
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchApplications = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();
      if (filters.force) params.set("force", filters.force);
      if (filters.status) params.set("status", filters.status);
      params.set("page", page);
      params.set("limit", 10);

      const res = await fetch(`${API_BASE_URL}/api/applications?${params.toString()}`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to load applications.");

      setApplications(data.data);
      setPages(data.pages || 1);
      setTotal(data.total || 0);
    } catch (err) {
      setError(err.message || "Could not connect to server.");
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/applications/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update status.");

      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status } : app))
      );
      if (selected?._id === id) setSelected({ ...selected, status });
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this application permanently?")) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/applications/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to delete.");

      setApplications((prev) => prev.filter((app) => app._id !== id));
      if (selected?._id === id) setSelected(null);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-parchment px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-forest/70">
              Recruitment
            </span>
            <h1 className="mt-1 font-display uppercase text-2xl font-bold text-forest">
              Applications Dashboard
            </h1>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
            {total} total application{total === 1 ? "" : "s"}
          </span>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-3">
          <select
            value={filters.force}
            onChange={(e) => {
              setPage(1);
              setFilters((f) => ({ ...f, force: e.target.value }));
            }}
            className="border border-ink/20 bg-white px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none"
          >
            <option value="">All Forces</option>
            <option value="Army">Army</option>
            <option value="Navy">Navy</option>
            <option value="Air Force">Air Force</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => {
              setPage(1);
              setFilters((f) => ({ ...f, status: e.target.value }));
            }}
            className="border border-ink/20 bg-white px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none"
          >
            <option value="">All Statuses</option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <button
            onClick={fetchApplications}
            className="border border-forest px-4 py-2 font-mono text-xs uppercase tracking-widest text-forest hover:bg-forest hover:text-parchment transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto border border-ink/10 bg-white shadow-sm">
          {error && (
            <div className="border-b border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {loading ? (
            <div className="px-4 py-10 text-center text-sm text-ink/60">Loading applications...</div>
          ) : applications.length === 0 ? (
            <div className="px-4 py-10 text-center text-sm text-ink/60">No applications found.</div>
          ) : (
            <table className="w-full min-w-[900px] border-collapse">
              <thead className="bg-forest">
                <tr>
                  <th className={thClass}>Candidate</th>
                  <th className={thClass}>CNIC</th>
                  <th className={thClass}>Course</th>
                  <th className={thClass}>Phone</th>
                  <th className={thClass}>Education</th>
                  <th className={thClass}>Status</th>
                  <th className={thClass}>Applied On</th>
                  <th className={thClass}>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10">
                {applications.map((app) => (
                  <tr key={app._id} className="hover:bg-parchment/60">
                    <td className={tdClass}>
                      <button
                        onClick={() => setSelected(app)}
                        className="font-semibold text-forest hover:underline text-left"
                      >
                        {app.name}
                      </button>
                      <div className="text-xs text-ink/50">{app.fatherName}</div>
                    </td>
                    <td className={tdClass}>{app.cnic}</td>
                    <td className={tdClass}>
                      <div className="text-xs font-mono uppercase tracking-wide text-forest/70">
                        {app.course?.force} — {app.course?.type}
                      </div>
                      <div>{app.course?.title}</div>
                    </td>
                    <td className={tdClass}>{app.phone}</td>
                    <td className={tdClass}>{app.education}</td>
                    <td className={tdClass}>
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app._id, e.target.value)}
                        className={`border-0 px-2 py-1 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-gold ${statusColors[app.status] || ""}`}
                      >
                        {statusOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className={tdClass}>
                      {app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "-"}
                    </td>
                    <td className={tdClass}>
                      <button
                        onClick={() => handleDelete(app._id)}
                        className="font-mono text-xs uppercase tracking-widest text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="border border-ink/20 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-ink/70 disabled:opacity-40"
            >
              Prev
            </button>
            <span className="font-mono text-xs text-ink/60">
              Page {page} of {pages}
            </span>
            <button
              disabled={page >= pages}
              onClick={() => setPage((p) => p + 1)}
              className="border border-ink/20 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-ink/70 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-dim/70 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg border border-gold/40 bg-parchment shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-forest px-6 py-4 text-parchment flex items-center justify-between">
              <h3 className="font-display uppercase text-lg font-bold">{selected.name}</h3>
              <button onClick={() => setSelected(null)} className="text-sm">Close ✕</button>
            </div>
            <div className="px-6 py-5 text-sm text-ink space-y-2">
              <p><span className="text-forest font-semibold">Father's Name:</span> {selected.fatherName}</p>
              <p><span className="text-forest font-semibold">CNIC:</span> {selected.cnic}</p>
              <p><span className="text-forest font-semibold">DOB:</span> {selected.dob ? new Date(selected.dob).toLocaleDateString() : "-"}</p>
              <p><span className="text-forest font-semibold">Gender:</span> {selected.gender}</p>
              <p><span className="text-forest font-semibold">Education:</span> {selected.education}</p>
              <p><span className="text-forest font-semibold">Email:</span> {selected.email || "-"}</p>
              <p><span className="text-forest font-semibold">Phone:</span> {selected.phone}</p>
              <p><span className="text-forest font-semibold">Domicile:</span> {selected.domicile || "-"}</p>
              <p><span className="text-forest font-semibold">Course:</span> {selected.course?.title} ({selected.course?.force} — {selected.course?.type})</p>
              <p><span className="text-forest font-semibold">Status:</span> {selected.status}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}