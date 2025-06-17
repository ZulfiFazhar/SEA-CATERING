import { toast } from "sonner";

export function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-4 bg-red-100 border border-red-400 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-red-800">Error</h2>
        <p className="mt-2 text-red-700">{error}</p>
        <button
          onClick={() => toast.error(error)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Show Error
        </button>
      </div>
    </div>
  );
}
