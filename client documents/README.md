# Client documents

This folder mirrors the intended downloadable client document structure for the workspace.

- Put source files into each `client_XX` folder.
- Upload those files to Firebase Storage or another approved file host.
- Store the final download URL in Firestore under `clients/{clientId}/documents` or a resource's `resources` array.
- Keep `metadata.sourcePath` aligned with the original file path so manual Firebase edits stay traceable.
