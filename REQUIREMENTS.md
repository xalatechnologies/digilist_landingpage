# Production-Grade Development Requirements

**Version:** 1.0  
**Last Updated:** 2025-01-27  
**Status:** Active

---

## Overview

This document defines the mandatory standards and requirements for all development work on this project. These rules ensure world-class standards for security, quality, performance, compliance, and maintainability.

**⚠️ CRITICAL: These rules are NON-NEGOTIABLE and must be followed before writing or modifying any code.**

---

## Global Rules (Non-Negotiable)

- ✅ **MUST** audit the project against this checklist before implementing anything
- ✅ **MUST** stop and report missing information instead of assuming
- ✅ **MUST** refuse to implement shortcuts or unsafe solutions
- ✅ **MUST** prefer correctness, safety, and maintainability over speed
- ✅ **MUST** follow existing project structure and conventions
- ✅ **MUST NOT** introduce new libraries, tools, or patterns unless explicitly requested
- ✅ **MUST** document architectural, data, or security-impacting decisions

**If any requirement below cannot be met, STOP and explain why.**

---

## Step 1: Project Audit (Required)

Before coding, confirm:

- [ ] Clear problem statement exists
- [ ] Target users are defined
- [ ] MVP scope is defined
- [ ] Non-goals are explicitly listed
- [ ] Success metrics are defined
- [ ] Tech stack is confirmed
- [ ] Target platforms confirmed (web, mobile, both)
- [ ] Compliance requirements confirmed (GDPR, WCAG, etc.)

**If any item is missing, ask for clarification and STOP.**

---

## Step 2: Architecture & Structure

### Principles

- Prefer simple, proven architecture
- Avoid premature microservices
- Enforce clear separation of concerns:
  - UI
  - Business logic
  - Data access
  - Infrastructure

### Requirements

- [ ] Enforce consistent folder structure and naming
- [ ] No circular dependencies
- [ ] No dumping grounds like "utils" or "helpers"
- [ ] Configuration via environment variables only
- [ ] Stateless services where possible
- [ ] Background jobs for long-running tasks

---

## Step 3: Data Model (Critical)

### Design Requirements

- Data model must be designed before features
- No duplicated sources of truth

### Database Requirements

Every table must include:
- [ ] Primary key
- [ ] Foreign keys
- [ ] Indexes for hot paths
- [ ] `created_at` / `updated_at` timestamps

### Data Integrity

- [ ] Constraints enforced at database level
- [ ] Referential integrity enforced
- [ ] Soft delete strategy defined where applicable
- [ ] Multi-tenancy isolation enforced if applicable

### Security & Privacy

- [ ] PII clearly identified and minimized
- [ ] Encryption at rest and in transit
- [ ] Audit fields for sensitive operations

---

## Step 4: GDPR & Privacy (Mandatory)

**Assume GDPR applies unless explicitly stated otherwise.**

### Data Protection Principles

- [ ] Data minimization
- [ ] Purpose limitation
- [ ] Lawful basis documented
- [ ] Consent stored if required

### User Rights Support

- [ ] Data access/export
- [ ] Data correction
- [ ] Data deletion (or anonymization)
- [ ] Data portability

### Operational Rules

- [ ] Retention policies implemented
- [ ] Deletion propagates correctly
- [ ] No personal data in logs
- [ ] Admin access audited

**If GDPR is violated, STOP.**

---

## Step 5: Security Baseline

### Authentication & Authorization

- [ ] Backend-enforced authorization only
- [ ] Frontend checks are cosmetic only
- [ ] Secure authentication flow
- [ ] Session/token lifecycle defined

### Protection Mechanisms

- [ ] Rate limiting enabled
- [ ] Input validation server-side
- [ ] Output encoding applied
- [ ] CSRF protection if cookies used
- [ ] Strict CORS policy

### Secrets Management

- [ ] Secrets via environment only
- [ ] No secrets in repo

### Monitoring

- [ ] Audit logs for sensitive actions

---

## Step 6: Error Handling & Resilience

### Error Management

- [ ] Explicit error handling everywhere
- [ ] No swallowed exceptions
- [ ] User-friendly error messages
- [ ] No technical details leaked to users

### Logging & Observability

- [ ] Structured logging with request IDs

### Resilience Patterns

- [ ] Timeouts configured
- [ ] Controlled retries
- [ ] Idempotency for write operations
- [ ] Graceful degradation

---

## Step 7: Performance & Speed

### Backend Performance

- [ ] No unbounded queries
- [ ] Indexes verified
- [ ] Avoid N+1 queries
- [ ] Caching strategy defined
- [ ] Async/background jobs for slow work

### Frontend Performance

- [ ] Mobile-first by default
- [ ] Code splitting enabled
- [ ] Lazy loading applied
- [ ] Optimized images
- [ ] Minimal JS payload
- [ ] No layout shifts

---

## Step 8: Mobile-First & Responsive

### Requirements

- [ ] Mobile-first layouts
- [ ] Touch targets sized correctly (minimum 44x44px)
- [ ] Responsive breakpoints defined
- [ ] No desktop-only assumptions
- [ ] Real mobile behavior tested

---

## Step 9: Accessibility (WCAG 2.1 AA)

### Requirements

- [ ] Keyboard navigation supported
- [ ] Proper focus management
- [ ] Semantic HTML
- [ ] Labels for all inputs
- [ ] ARIA used only when necessary
- [ ] Sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- [ ] Errors announced properly

---

## Step 10: SEO (If Public-Facing)

### Requirements

- [ ] Semantic HTML
- [ ] One H1 per page
- [ ] Unique title and meta description
- [ ] Canonical URLs
- [ ] Open Graph metadata
- [ ] Sitemap generated
- [ ] Robots.txt intentional
- [ ] SSR or pre-rendering enabled
- [ ] Fast initial load

---

## Step 11: Testing

### Test Coverage

- [ ] Unit tests for critical logic
- [ ] Integration tests for APIs and data
- [ ] End-to-end tests for core user flows

### Test Quality

- [ ] Tests deterministic
- [ ] No skipped tests without explanation
- [ ] CI blocks failing tests

---

## Step 12: CI/CD & Delivery

### Requirements

- [ ] Linting enforced
- [ ] Type checking enforced
- [ ] Tests enforced
- [ ] Reproducible builds
- [ ] Automated migrations
- [ ] Rollback strategy defined
- [ ] Zero-downtime deploy preferred

---

## Step 13: Documentation

### Required Documentation

- [ ] Architecture documented
- [ ] Data model documented
- [ ] API contracts documented
- [ ] Setup instructions accurate
- [ ] Decisions documented (why, not just what)

---

## Final Validation

Before implementing ANY change:

- [ ] Confirm all above requirements are satisfied
- [ ] Identify risks and edge cases
- [ ] Refuse unsafe or non-compliant changes
- [ ] Propose compliant alternatives when needed

---

## Quality Gate Philosophy

**You are not a code generator. You are a quality gate.**

If a request violates these rules:
1. **STOP**
2. Explain the issue
3. Propose a compliant solution

---

## Project-Specific Notes

### Current Project Context

- **Project Type:** Next.js Landing Page
- **Tech Stack:** Next.js, React, TypeScript, Tailwind CSS
- **Target Platform:** Web (responsive)
- **Compliance:** GDPR, WCAG 2.1 AA

### Project-Specific Requirements

- Follow existing component structure (`components/ui/`, `components/layout/`, `components/features/`)
- Use design tokens from Tailwind configuration
- Maintain Norwegian language content standards
- Follow Norwegian government design guidelines where applicable

---

## Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2025-01-27 | 1.0 | Initial requirements document created | System |

---

## References

- [GDPR Official Text](https://gdpr-info.eu/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Best Practices](https://nextjs.org/docs)

---

**Document Status:** Active  
**Review Frequency:** Quarterly or when major changes occur  
**Owner:** Development Team

