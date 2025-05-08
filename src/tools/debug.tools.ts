/**
 * Permet d'ajouter une latence au traitement durant le DEV
 * @param time Temps en milliseconde (Par default: 1 000)
 */
export async function fakeLatence(time = 1_000) : Promise<void> {
  if(import.meta.env.DEV) {
    return await new Promise((resolve) => setTimeout(resolve, time));
  }
} 