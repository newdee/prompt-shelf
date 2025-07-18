use anyhow::{Ok, Result};
use std::path::{Path, PathBuf};

pub fn find_commit(prompt_id: &str, version: &str, commit_id: &str) -> Result<PathBuf> {
    let dir = Path::new("/data").join(prompt_id).join(version);
    std::fs::create_dir_all(&dir)?;
    let path = dir.join(commit_id);
    Ok(path)
}
pub fn find_config(prompt_id: &str) -> Result<PathBuf> {
    let dir = Path::new("/data").join(prompt_id);
    std::fs::create_dir_all(&dir)?;
    let path = dir.join("info.json");
    Ok(path)
}
pub fn find_prompt(prompt_id: &str) -> Result<PathBuf> {
    Ok(Path::new("/data").join(prompt_id))
}
