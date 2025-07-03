// backend/src/routes/mod.rs
use actix_web::web;
use crate::handlers::{multiply_numbers, health_check};

pub fn config_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/health", web::get().to(health_check))
            .route("/multiply/{num1}/{num2}", web::get().to(multiply_numbers))
    );
}